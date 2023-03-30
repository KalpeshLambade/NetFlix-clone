import { useEffect, useState } from "react";
import "./Component.css";

const Genere = () => {
  const [shows, setShows] = useState();

  useEffect(() => {
    fetch("http://api.tvmaze.com/search/shows?q=golden girls")
      .then((res) => res.json())
      .then((Json) => setShows(Json));
  }, []);

  console.log(shows);
  return (
    <div id="genere">
      <div className="genere-nav">
        <div className="genere-nav-left">
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="netflix-logo"
            className="adj-img"
          />
        </div>
        <div className="genere-nav-right">
          <p>UNLIMITED TV SHOWS & MOVIES</p>
          <button className="genere-nav-right-join">JOIN NOW</button>
          <button className="genere-nav-right-signout">sign Out</button>
        </div>
      </div>
      <div className="show-title">
        <div>
          <h1>TV Shows</h1>
          <p>
            These days, the small screen has some very big things to offer. From
            sitcoms to dramas to travel and talk shows, these are all the best
            shows on TV.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Genere;
