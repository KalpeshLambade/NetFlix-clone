"./Component.css";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
    const route =useNavigate();

  return (
    <div id="pagenotfound">
      <div className="pagenotfound-nav">
        <div>
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="netflix-logo"
            className="adj-img"
          />
        </div>
      </div>

      <div className="not-content"></div>
      <div className="not-display-content">
        <div>
          <h1>Lost your way?</h1>
          <p>
            Sorry, we can't find that page. You'll find lots to explore on the
            home page
          </p>
          <button className="cursor" onClick={() => {route("/")}}>Netflix Home</button>
          <div>
            <p>
              Error Code <strong>NSES-404</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
