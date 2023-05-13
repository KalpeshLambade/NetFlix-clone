import { useEffect, useState } from "react";
import "./Component.css";
import { useNavigate } from "react-router-dom";

const ShowsList = require("../JSON/Shows.json");

const Genere = () => {
  const [shows, setShows] = useState();
  const [currentData, setCurrentData] = useState(false);
  const route = useNavigate();

  const [popular, setPopular] = useState();


  // Api Data
  useEffect(() => {
    fetch("http://api.tvmaze.com/search/shows?q=golden girls")
      .then((res) => res.json())
      .then((Json) => setShows(Json));
  }, []);
  // UserData
  useEffect(() => {
    var currentUserData = JSON.parse(localStorage.getItem("currentDataNet"));
    if (currentUserData) {
      setCurrentData(true);
    }
  }, []);
  // Json Data
  useEffect(() => {
    setPopular(ShowsList);
  }, [popular]);

  // console.log(shows);

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
          {currentData ? (
            <button
              className="genere-nav-right-signout"
              onClick={() => {
                route("/logout");
              }}
            >
              sign Out
            </button>
          ) : (
            <button
              className="genere-nav-right-signout"
              onClick={() => {
                route("/signin");
              }}
            >
              sign In
            </button>
          )}
        </div>
      </div>
      <div className="show-title">
        <div>
          <h1>Only on Netflix</h1>
          <p>
            Netflix is the home of amazing original programming that you can’t
            find anywhere else. Movies, TV shows, specials and more, all
            tailored specifically to you.
          </p>
        </div>
      </div>

      {/* Show section */}
      <div className="shows">
        <div>
          <p className="show-maintitle">Popular On Netflix</p>
          <p className="show-subtital">
            Explore More <i className="fa-solid fa-angle-right"></i>
          </p>
        </div>
        {/* Here We can use api */}
        <div id="container">
          <div id="flex-scroll">
            {popular &&
              popular.Popular.map((e, i) => (
                <div className="box" key={i}>
                  <div>
                    <img src={e.image} alt="show-img" className="adj-img " />
                  </div>
                  <p>{e.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="shows">
        <div>
          <p className="show-maintitle">Crime TV Shows</p>
          <p className="show-subtital">
            Explore More <i className="fa-solid fa-angle-right"></i>
          </p>
        </div>
        {/* Here We can use api */}
        <div id="container">
          <div id="flex-scroll">
            {popular &&
              popular.Crime.map((e, i) => (
                <div className="box" key={i}>
                  <div>
                    <img src={e.image} alt="show-img" className="adj-img " />
                  </div>
                  <p>{e.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="shows">
        <div>
          <p className="show-maintitle">K-Dramas</p>
          <p className="show-subtital">
            Explore More <i className="fa-solid fa-angle-right"></i>
          </p>
        </div>
        {/* Here We can use api */}
        <div id="container">
          <div id="flex-scroll">
            {popular &&
              popular.KDramas.map((e, i) => (
                <div className="box" key={i}>
                  <div>
                    <img src={e.image} alt="show-img" className="adj-img " />
                  </div>
                  <p>{e.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="shows">
        <div>
          <p className="show-maintitle">New Releases </p>
          <p className="show-subtital">
            Explore More <i className="fa-solid fa-angle-right"></i>
          </p>
        </div>
        {/* Here We can use api */}
        <div id="container">
          <div id="flex-scroll">
            {popular &&
              popular.NewReleases.map((e, i) => (
                <div className="box" key={i}>
                  <div>
                    <img src={e.image} alt="show-img" className="adj-img " />
                  </div>
                  <p>{e.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="shows">
        <div>
          <p className="show-maintitle">Bingeworthy TV Dramas</p>
          <p className="show-subtital">
            Explore More <i className="fa-solid fa-angle-right"></i>
          </p>
        </div>
        {/* Here We can use api */}
        <div id="container">
          <div id="flex-scroll">
            {popular &&
              popular.Bingeworthy.map((e, i) => (
                <div className="box" key={i}>
                  <div>
                    <img src={e.image} alt="show-img" className="adj-img " />
                  </div>
                  <p>{e.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="shows">
        <div>
          <p className="show-maintitle">Suspenseful TV Shows</p>
          <p className="show-subtital">
            Explore More <i className="fa-solid fa-angle-right"></i>
          </p>
        </div>
        {/* Here We can use api */}
        <div id="container">
          <div id="flex-scroll">
            {popular &&
              popular.Suspenseful.map((e, i) => (
                <div className="box" key={i}>
                  <div>
                    <img src={e.image} alt="show-img" className="adj-img " />
                  </div>
                  <p>{e.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="shows">
        <div>
          <p className="show-maintitle">US TV Shows</p>
          <p className="show-subtital">
            Explore More <i className="fa-solid fa-angle-right"></i>
          </p>
        </div>
        {/* Here We can use api */}
        <div id="container">
          <div id="flex-scroll">
            {shows &&
              shows.map((e, i) => (
                <div className="box apibox" key={i} onClick={() => route(`/title/${e.show.id}`)}>
                  <div>
                    <img
                      src={e.show.image.original}
                      alt="show-img"
                      className="adj-img "
                    />
                  </div>
                  <p className="cursor">{e.show.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="shows">
        <div>
          <p className="show-maintitle">Award Winning</p>
          <p className="show-subtital">
            Explore More <i className="fa-solid fa-angle-right"></i>
          </p>
        </div>
        {/* Here We can use api */}
        <div id="container">
          <div id="flex-scroll">
            {popular &&
              popular.AwardWinning.map((e, i) => (
                <div className="box" key={i}>
                  <div>
                    <img src={e.image} alt="show-img" className="adj-img " />
                  </div>
                  <p>{e.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="shows">
        <div>
          <p className="show-maintitle">TV Dramas</p>
          <p className="show-subtital">
            Explore More <i className="fa-solid fa-angle-right"></i>
          </p>
        </div>
        {/* Here We can use api */}
        <div id="container">
          <div id="flex-scroll">
            {popular &&
              popular.Weekend.map((e, i) => (
                <div className="box" key={i}>
                  <div>
                    <img src={e.image} alt="show-img" className="adj-img " />
                  </div>
                  <p>{e.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* end of show section */}

      {!currentData && (
        <div className="even-more">
          <div>
            <div className="shows">
              <div>
                <p className="show-maintitle">Casual Viewing</p>
                <p className="show-subtital">
                  Explore More <i className="fa-solid fa-angle-right"></i>
                </p>
              </div>
              {/* Here We can use api */}
              <div id="container">
                <div id="flex-scroll">
                  <div className="box">
                    <div>
                      <img
                        src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABf3XXRQVhCnycfdPbE4zFHCQQe6Gra6TCCYaqebbG51F3jQTTeYbFp_YRRuEWRHEF3psa_83kwzh2qaM0eLRIE8t2SsyQMvsA4E.jpg?r=595"
                        alt="show-img"
                        className="adj-img "
                      />
                    </div>
                    <p>The Good Doctor</p>
                  </div>

                  <div className="box">
                    <div>
                      <img
                        src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ6qV_1WV_3a_2gLaQk9MmciQQtSRWKXpkbtbtEhcSQOaWlhkv4YQ8ZlYzL4HGQoebZx-mhqfuZFLCtgWfZOEKTHw_g2IunduRw.jpg?r=75b"
                        alt="show-img"
                        className="adj-img "
                      />
                    </div>
                    <p>Friends</p>
                  </div>

                  <div className="box">
                    <div>
                      <img
                        src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYGn9sGnT9skTiPQmyfnJTGBAbZqVk_M0CvE3cdEMXGJG5peysCuI7xjDmdm60e7aiY4bp6wRUmHY_TvWMic6w_AItSpwgzTMt8.jpg?r=580"
                        alt="show-img"
                        className="adj-img "
                      />
                    </div>
                    <p>The Big Bang Theory</p>
                  </div>

                  <div className="box">
                    <div>
                      <img
                        src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXTx_Dzrsk24n5STlBZ4qiI2PnziAbVwPhFLuWm3xJrP7wb9Cdt301ByOOjSm8ggw7K0R-csBtyIqoFHDI7_YO_JIFMOTAJiwk8.jpg?r=72f"
                        alt="show-img"
                        className="adj-img "
                      />
                    </div>
                    <p>Stories by Rabindranath Tagore</p>
                  </div>

                  <div className="box">
                    <div>
                      <img
                        src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXmZaW1CKl2W4SxT26uX2tvbl4SzfHWVT12a7-B3Om1yK0WJEL2rUN24mH4V5QANZHJ2sYnV8aTxaPhBMoe22ps-rB-hcBBJFpwPrlo4hql5Z6f_RIeKQbEI8w0FnpQeqdvj.jpg?r=532"
                        alt="show-img"
                        className="adj-img "
                      />
                    </div>
                    <p>Our Planet</p>
                  </div>

                  <div className="box">
                    <div>
                      <img
                        src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYh0o2_5SUJqZ6rXaPu1yZjOTyBjXmfFtTny6eY7hL_Twe_NnrsXvEvPNfl80_FWZaXiGn1ealxG1yRdDgJDbkLxdsMIK9-y7OHB4WtGdLHYxY0vM8XhH4s4rqNh9gICgJ4u.jpg?r=74d"
                        alt="show-img"
                        className="adj-img "
                      />
                    </div>
                    <p>Instant Dream Home</p>
                  </div>

                  <div className="box">
                    <div>
                      <img
                        src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABc6-5UlIgO4aYHJnhl9vnHvcka41M5VD0ayGDhkvSbei81_ze-TTIZbislcggOU9njwHaFN7TfMGWPq0OdRTEQNc5asPiVBkNnDzAdGxqI7Rtc5hTNDh3fwcqCp7dllm05Q6.jpg?r=cea"
                        alt="show-img"
                        className="adj-img "
                      />
                    </div>
                    <p>Is It Cake?</p>
                  </div>

                  <div className="box">
                    <div>
                      <img
                        src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRtv9ukuOa9djw8bDvEE0Zo78DV98VUntXejapJPz8DN2VeSuf9CN1oEydnWuCjXPINnaNS2sgfSQ_vWsNZxPRsJ-t26oU6CFew.jpg?r=692"
                        alt="show-img"
                        className="adj-img "
                      />
                    </div>
                    <p>New Amsterdam</p>
                  </div>

                  <div className="box">
                    <div>
                      <img
                        src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTjybsJhIpzatU7j9sYp6sHPWWwhUpk7OBXp0KofYMvnn8G3S-M2ejMtbnMLsnr6UDQXq5JP98FkMLBdLRaRYplh8yDZq7-he8M.jpg?r=478"
                        alt="show-img"
                        className="adj-img "
                      />
                    </div>
                    <p>Superstore</p>
                  </div>

                  <div className="box">
                    <div>
                      <img
                        src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABT7td7j4HkY2xVK7yOo-gHaMYYMdsNR0qfjUvwZ_tZfgUk2mMw0Y072v5f-5yvu5X_tnAdihntpibOE2bzyXxtHOv02jLWzbXD4.jpg?r=0e3"
                        alt="show-img"
                        className="adj-img "
                      />
                    </div>
                    <p>Two and a Half Men</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="shows">
              <div>
                <p className="show-maintitle">Bingeworthy TV Shows</p>
                <p className="show-subtital">
                  Explore More <i className="fa-solid fa-angle-right"></i>
                </p>
              </div>
              {/* Here We can use api */}
              <div id="container">
                <div id="flex-scroll">
                  <div className="box">
                    <div>
                      <img
                        src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQLmld5q2rjlY100airKKSk1EQhB4dCKjp5rAco1LfwrOwncva0yHOnCes-048j0VjXIhcRfibLX55ThfxlvmDxT5FJ3X_vvb3py6x8AClZUsvhw7tuPPm0vW5OseSn_n_fd.jpg?r=152"
                        alt="show-img"
                        className="adj-img "
                      />
                    </div>
                    <p>Lost in Space</p>
                  </div>

                  <div className="box">
                    <div>
                      <img
                        src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWzbnU0D9rxtW8Mc6cDZMkd0knteezg_KEtOgnNsw0s9wG2dBAgIP2XRB-b5PVO6xSA0BMrvytui8oEQHFU9gT1f0NiVbXSC5XnJLu48fIJ9YfkgUFde43PSKTKtOsidPt8a.jpg?r=f95"
                        alt="show-img"
                        className="adj-img "
                      />
                    </div>
                    <p>Sex/Life</p>
                  </div>

                  <div className="box">
                    <div>
                      <img
                        src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS1HC5n60sCfTZKvD86wFWwS2hAgEkPwauTjMf7Y_1tvsatiJVqx4tP2dJzW_L1inBHsQ2sGdVdi2RYAbGhbHiX13B3wiafxR8a6bebqK8fcePdT6jmvPhmCL1UVg0FJWBg9.jpg?r=753"
                        alt="show-img"
                        className="adj-img "
                      />
                    </div>
                    <p>13 Reasons Why</p>
                  </div>

                  <div className="box">
                    <div>
                      <img
                        src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWNMObXLKx79PHWsp8OjjPUF3ZwrsnETqYQhkMWVMQTqjIf9lkJpvx271la69OY-R1cI1WC2AD7p56-4f8NyYHjXsVn068VUBPn--rVGa6I-5Yi7_eEzbF8H_LEzyE6_zaZt.jpg?r=a56"
                        alt="show-img"
                        className="adj-img "
                      />
                    </div>
                    <p>Manifest</p>
                  </div>

                  <div className="box">
                    <div>
                      <img
                        src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdlqOt-9Bql4Vhol4cmLjn-5pkhZXP8XGQsoPsoyrgWm_LbE0FJ37kPbZNEgTpeiYaDp9BAWqtVHq3hH9pe3hUgdyafvLoc2t_isV-AZ2l2XaPPo3ZLk2ezq3l0n2FBMgFWm.jpg?r=0b6"
                        alt="show-img"
                        className="adj-img "
                      />
                    </div>
                    <p>The Night Agent</p>
                  </div>

                  <div className="box">
                    <div>
                      <img
                        src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSfRonQEzJhwREDf3kJqzot4mUyxolQQjAOiGucTszcqTDQ_V6P6BjZRHxvByyzlu4qkwy8q9qTPWMWPLb8KrBYV-qjZPBuUrlNhot6JORcYwvOI6q6Bw4nd_jMJwcnQT1Lc.jpg?r=4ef"
                        alt="show-img"
                        className="adj-img "
                      />
                    </div>
                    <p>House of Cards</p>
                  </div>

                  <div className="box">
                    <div>
                      <img
                        src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTCemmEqYOn1oZmvrXY5CuChJt3FXLRxOHcfYmf5G85uC5HtVMvED5i5NqeCfdfqUdSo6qGEjpjtzd4UfrInaobtkTS2I6AG_fo.jpg?r=881"
                        alt="show-img"
                        className="adj-img "
                      />
                    </div>
                    <p>The Walking Dead</p>
                  </div>

                  <div className="box">
                    <div>
                      <img
                        src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVUts_50G_BU-GoRCs82Dz8jEApbkrWkz4nOkDZRVbMGzVo380SjrBp6jjwXHSqYBmk6j_w-AwaP7JKKM12xhf0EtzW4Ft7cxM3SOkwst0nJVg1c80OAn9M26Q9aG0biSQNc.jpg?r=01f"
                        alt="show-img"
                        className="adj-img "
                      />
                    </div>
                    <p>Virgin River</p>
                  </div>

                  <div className="box">
                    <div>
                      <img
                        src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQI0a9q6XmBMv5G_VMgXUk5cgKPyQkTojIyNuFRaVE1K_7S83IW7UKdOSiTs4Ne6xJdTOvaQE5Pqx_vrv3r3otP1CVg8DhtmLwEcLOOshhWmmSbdBEyL6ixf7R5gU6VyZ1bd.jpg?r=1f3"
                        alt="show-img"
                        className="adj-img "
                      />
                    </div>
                    <p>Locke & Key</p>
                  </div>

                  <div className="box">
                    <div>
                      <img
                        src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRXclxneY5oTxmqHUvFKteXeQk-oaa37mS2acf0PEpTLl_B_pZAV-qGiePL22TmOfudzg_wj8cOrmgnFfQjUjYcmf7mM8DIKAKvc6DhgoyzRIuzXaAWMqiHiSFu0UN41o511.jpg?r=6c0"
                        alt="show-img"
                        className="adj-img "
                      />
                    </div>
                    <p>Orange Is the New Black</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h1>There’s even more to watch.</h1>
            <p>
              Netflix has an extensive library of feature films, documentaries,
              TV shows, anime, award-winning Netflix originals and more. Watch
              as much as you want, anytime you want.
            </p>
            <button>Join Now</button>
          </div>
        </div>
      )}

      <div className="genere-footer">
        <div>
          <div className="footer-t">
            <p>Questions? Call 000-800-919-1694</p>
          </div>

          <div className="footer-m">
            <div>
              <p>FAQ</p>
              <p>Investor Relations</p>
              <p>Privacy</p>
              <p>Speed Test</p>
            </div>
            <div>
              <p>Help Centre</p>
              <p>Jobs</p>
              <p>Cookie Preferences</p>
              <p>Legal Notices</p>
            </div>
            <div>
              <p>Account</p>
              <p>Ways to Watch</p>
              <p>Corporate Information</p>
              <p>Only on Netflix</p>
            </div>
            <div>
              <p>Media Centre</p>
              <p>Terms of Use</p>
              <p>Contact Us</p>
            </div>
          </div>

          <div className="footer-b">
            <div>
              <i className="fa-solid fa-globe"></i>
              <p>English</p>
              <i className="fa-solid fa-caret-down"></i>
            </div>
            <p>Netflix India</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Genere;
