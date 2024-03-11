import React, { useEffect, useRef } from "react";
import { TweenMax, Expo, Quint } from "gsap";
import "./Carousel.css";

const Carousel = () => {
  let w, container, carousel, item, radius, itemLength, rY, ticker, fps;
  let mouseX = 0;
  let mouseY = 0;
  let mouseZ = 0;
  let addX = 0;

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
    w = window;
    container = contentContainerRef.current;
    carousel = contentContainerRef.current.querySelector("#carouselContainer");
    item = contentContainerRef.current.querySelectorAll(".carouselItem");
    itemLength =
      contentContainerRef.current.querySelectorAll(".carouselItem").length;
    fps = contentContainerRef.current.querySelector("#fps");
    rY = 360 / itemLength;
    radius = Math.round(250 / Math.tan(Math.PI / itemLength));

    TweenMax.set(container, { perspective: 600 });
    TweenMax.set(carousel, { z: -radius });

    for (let i = 0; i < itemLength; i++) {
      let $item = item[i];
      let $block = $item.querySelector(".carouselItemInner");

      TweenMax.set($item, {
        rotationY: rY * i,
        z: radius,
        transformOrigin: "50% 50% " + -radius + "px",
      });

      animateIn($item, $block);
    }

    carousel.addEventListener("mousemove", onMouseMove, false);
    ticker = setInterval(looper, 1000 / 60);

    return () => {
      window.removeEventListener("mousemove", onMouseMove, false);
      clearInterval(ticker);
    };
  }, []);

  const animateIn = ($item, $block) => {
    let $nrX = 360 * getRandomInt(2);
    let $nrY = 360 * getRandomInt(2);

    let $nx = -2000 + getRandomInt(4000);
    let $ny = -2000 + getRandomInt(4000);
    let $nz = -4000 + getRandomInt(4000);

    let $s = 1.5 + getRandomInt(10) * 0.1;
    let $d = 1 - getRandomInt(8) * 0.1;

    TweenMax.set($item, { autoAlpha: 1, delay: $d });
    TweenMax.set($block, {
      z: $nz,
      rotationY: $nrY,
      rotationX: $nrX,
      x: $nx,
      y: $ny,
      autoAlpha: 0,
    });
    TweenMax.to($block, $s, {
      delay: $d,
      rotationY: 0,
      rotationX: 0,
      z: 0,
      ease: Expo.easeInOut,
    });
    TweenMax.to($block, $s - 0.5, {
      delay: $d,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: Expo.easeInOut,
    });
  };

  const onMouseMove = (event) => {
    mouseX = -(-(window.innerWidth * 0.5) + event.pageX) * 0.0025;
    mouseY = -(-(window.innerHeight * 0.5) + event.pageY) * 0.01;
    mouseZ =
      -radius - (Math.abs(-(window.innerHeight * 0.5) + event.pageY) - 200);
  };

  const looper = () => {
    addX += mouseX;
    TweenMax.to(carousel, 1, {
      rotationY: addX,
      rotationX: mouseY,
      ease: Quint.easeOut,
    });
    TweenMax.set(carousel, { z: mouseZ });

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
              <div className="carouselItemInner trans3d">{i + 1}</div>
            </figure>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Carousel;
