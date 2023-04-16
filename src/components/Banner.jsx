import "../styles/banner.css";
import { Link } from "react-router-dom";

const Banner = ({ title, text, img }) => {
  return (
    <div className="banner">
      <div className="container">
        <div className="banner-container">
          <div className="text-side">
            <div className="text">
              <h2>{title}</h2>
              <p>{text}</p>
              <Link
                onClick={() => window.scrollTo(0, 0)}
                to="e-commerce/categories/all"
              >
                <button>Shop now</button>
              </Link>
            </div>
          </div>
          <div className="img-side">
            <img src={img} alt="banner" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
