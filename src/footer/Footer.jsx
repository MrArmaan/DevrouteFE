import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Let's keep in touch!</h4>
          <h5>
            Find us on any of these platforms, we respond 1-2 business days.
          </h5>
          <div className="footer-social-buttons">
            <button>
              <i className="fab fa-twitter"></i>
            </button>
            <button>
              <i className="fab fa-facebook-square"></i>
            </button>
            <button>
              <i className="fab fa-dribbble"></i>
            </button>
            <button>
              <i className="fab fa-github"></i>
            </button>
          </div>
        </div>
        <div className="footer-section">
          <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
            Useful Links
          </span>
          <ul className="list-unstyled">
            <li>
              <a href="https://www.creative-tim.com/presentation?ref=njs-profile">
                About Us
              </a>
            </li>
            <li>
              <a href="https://blog.creative-tim.com?ref=njs-profile">Blog</a>
            </li>
            <li>
              <a href="https://www.github.com/creativetimofficial?ref=njs-profile">
                Github
              </a>
            </li>
            <li>
              <a href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile">
                Free Products
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="my-6 border-blueGray-300" />
      <div className="footer-bottom">
        <div className="text-sm text-blueGray-500 font-semibold py-1">
          Copyright © <span id="get-current-year">2021</span>
          <a
            href="https://www.creative-tim.com/product/notus-js"
            className="text-blueGray-500 hover:text-gray-800"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Notus JS by
            <a
              href="https://www.creative-tim.com?ref=njs-profile"
              className="text-blueGray-500 hover:text-blueGray-800"
            >
              Creative Tim
            </a>
            .
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
