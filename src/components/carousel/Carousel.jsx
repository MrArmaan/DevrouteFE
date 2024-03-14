import React, { useEffect, useRef } from "react";
import { gsap, Expo, Quint } from "gsap";
import "./Carousel.css";

const Carousel = () => {
  let container, carousel, item, radius, itemLength, rY, ticker, fps;
  let mouseX = 0;
  let mouseY = 0;
  let mouseZ = 0;
  let addX = 0;
  let previousMouseX = 0;
  let isMouseDown = false;

  const fps_counter = {
    tick: function () {
      this.times = this.times.concat(+new Date());
      let seconds,
        times = this.times;

      if (times.length > this.span + 1) {
        times.shift();
        seconds = (times[times.length - 1] - times[0]) / 1000;
        return Math.round(this.span / seconds);
      } else return null;
    },

    times: [],
    span: 20,
  };

  const counter = Object.create(fps_counter);
  const contentContainerRef = useRef(null);

  useEffect(() => {
    container = contentContainerRef.current;
    carousel = contentContainerRef.current.querySelector("#carouselContainer");
    item = contentContainerRef.current.querySelectorAll(".carouselItem");
    itemLength =
      contentContainerRef.current.querySelectorAll(".carouselItem").length;
    fps = contentContainerRef.current.querySelector("#fps");
    rY = 360 / itemLength;
    radius = Math.round(240 / Math.tan(Math.PI / itemLength));

    gsap.set(container, { perspective: 600 });
    gsap.set(carousel, { z: -radius });

    for (let i = 0; i < itemLength; i++) {
      let $item = item[i];
      let $block = $item.querySelector(".carouselItemInner");

      gsap.set($item, {
        rotationY: rY * i,
        z: radius,
        transformOrigin: "50% 50% " + -radius + "px",
      });

      animateIn($item, $block);
    }

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    ticker = setInterval(looper, 1000 / 60);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      clearInterval(ticker);
    };
  }, []);

  const animateIn = ($item, $block) => {
    let $nrX = 360 * getRandomInt(2);
    let $nrY = 360 * getRandomInt(2);

    let $nx = -2000 + getRandomInt(2000);
    let $ny = -2000 + getRandomInt(2000);
    let $nz = -4000 + getRandomInt(4000);

    let $s = 1.5 + getRandomInt(10) * 0.1;
    let $d = 1 - getRandomInt(6) * 0.1;

    gsap.set($item, { autoAlpha: 1, delay: $d });
    gsap.set($block, {
      z: $nz,
      rotationY: $nrY,
      rotationX: $nrX,
      x: $nx,
      y: $ny,
      autoAlpha: 0,
    });
    gsap.to($block, $s, {
      delay: $d,
      rotationY: 0,
      rotationX: 0,
      z: 0,
      scale: 0.8,
      ease: Expo.easeInOut,
    });
    gsap.to($block, $s - 0.5, {
      delay: $d,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: Expo.easeInOut,
    });
  };

  const onMouseDown = (event) => {
    isMouseDown = true;
    previousMouseX = event.clientX;
  };

  const onMouseMove = (event) => {
    if (isMouseDown) {
      mouseX = event.clientX;
      addX += (mouseX - previousMouseX) * 0.1;
      previousMouseX = mouseX;
    }
  };

  const onMouseUp = () => {
    isMouseDown = false;
  };

  const looper = () => {
    if (!isMouseDown) {
      addX += 0.1;
    }

    gsap.to(carousel, 1, {
      rotationY: addX,
      ease: Quint.easeOut,
    });

    if (fps) {
      fps.innerText = "Framerate: " + (counter.tick() || "N/A") + "/60 FPS";
    }
  };

  const getRandomInt = ($n) => {
    return Math.floor(Math.random() * $n + 1);
  };

  return (
    <div>
      <div ref={contentContainerRef} id="contentContainer" className="trans3d">
        <section id="carouselContainer" className="trans3d">
          {[...Array(12)].map((_, i) => (
            <figure
              key={`item${i + 1}`}
              id={`item${i + 1}`}
              className="carouselItem trans3d"
            >
              <div className="carouselItemInner trans3d"></div>
            </figure>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Carousel;
