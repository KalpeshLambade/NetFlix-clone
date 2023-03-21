import "./Component.css";
function Homepage() {
  return (
    <div>
      <div className="home-top"></div>
      <div className="home-top-on">
        <div className="home-top-nav">
          <div>
            <img
              src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
              alt="netflix logo"
            />
          </div>
          <div>
            <div>
              <i className="fa-solid fa-globe"></i>
              <p>English</p>
              <i className="fa-solid fa-caret-down"></i>
            </div>
            <button>Sign In</button>
          </div>
        </div>
        <div className="home-top-mid">
          <div>
            <h1>Unlimited movies, TV shows and more.</h1>
            <p>Watch anywhere. Cancel anytime.</p>
          </div>
          <div>
            <p>
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div>
              <input type="email" placeholder="Email Address" />
              <button>
                Get Started <i className="fa-solid fa-angle-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-tv">
        <div>
          <div className="home-tv-content">
            <h1>Enjoy on your TV.</h1>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>
          <div className="home-tv-video">
            <div>
              <video autoPlay muted loop>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>

            <div>
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                alt="tv"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-section">
        <div>
          <div className="home-section-left">
            <div>
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"
                alt="mobile-img"
              />
            </div>
            <div className="home-section-download">
              <div>
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  alt="stranger-things"
                />
              </div>
              <div>
                <p>Stranger Things</p>
                <p>Downloading...</p>
              </div>
              <div>
                <img
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif"
                  alt="download-img"
                />
              </div>
            </div>
          </div>
          <div className="home-section-right">
            <h1>Download your shows to watch offline.</h1>
            <p>
              Save your favourites easily and always have something to watch.
            </p>
          </div>
        </div>
      </div>
      <div className="home-section">
        <div className="home-section-adjust">
          <div className="home-section-content">
            <h1>Watch everywhere.</h1>
            <p>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="home-section-video">
            <div>
              <video autoPlay muted loop>
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                  type="video/mp4"
                />
              </video>
            </div>

            <div>
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
                alt="tv"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="home-section">
        <div>
          <div className="home-section-left">
            <div>
              <img
                src="https://occ-0-6247-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png?r=420"
                alt="children-img"
              />
            </div>
          </div>
          <div className="home-section-right">
            <h1>Create profiles for children.</h1>
            <p>
              Send children on adventures with their favourite characters in a
              space made just for them—free with your membership.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
