import { useState } from "react";
import "./Component.css";
function Homepage() {
  const [isClick, setIsClick] = useState(false);

  function click() {
    setIsClick(!isClick);
  }
  console.log(isClick);

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
      <div className="home-questions">
        <div>
          <h1>Frequently Asked Questions</h1>
          <div className="home-questions-section">
            <div>
              <div className="home-que">
                <p>What is Netflix?</p>
                <div>
                  <i
                    className="fa-solid fa-plus"
                    onClick={() => {
                      click();
                    }}
                  ></i>
                </div>
              </div>
              {isClick && (
                <div className="home-ans">
                  <p>
                    Netflix is a streaming service that offers a wide variety of
                    award-winning TV shows, movies, anime, documentaries and
                    more – on thousands of internet-connected devices.
                  </p>
                  <p>
                    You can watch as much as you want, whenever you want,
                    without a single ad – all for one low monthly price. There's
                    always something new to discover, and new TV shows and
                    movies are added every week!
                  </p>
                </div>
              )}
            </div>

            <div>
              <div className="home-que">
                <p>How much does Netflix cost?</p>
                <div>
                  <i
                    className="fa-solid fa-plus"
                    onClick={() => {
                      click();
                    }}
                  ></i>
                </div>
              </div>
              {isClick && (
                <div className="home-ans">
                  <p>
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop,
                    or streaming device, all for one fixed monthly fee. Plans
                    range from ₹ 149 to ₹ 649 a month. No extra costs, no
                    contracts.
                  </p>
                </div>
              )}
            </div>

            <div>
              <div className="home-que">
                <p>Where can I watch?</p>
                <div>
                  <i
                    className="fa-solid fa-plus"
                    onClick={() => {
                      click();
                    }}
                  ></i>
                </div>
              </div>
              {isClick && (
                <div className="home-ans">
                  <p>
                    Watch anywhere, anytime. Sign in with your Netflix account
                    to watch instantly on the web at netflix.com from your
                    personal computer or on any internet-connected device that
                    offers the Netflix app, including smart TVs, smartphones,
                    tablets, streaming media players and game consoles.
                  </p>
                  <p>
                    You can also download your favourite shows with the iOS,
                    Android, or Windows 10 app. Use downloads to watch while
                    you're on the go and without an internet connection. Take
                    Netflix with you anywhere.
                  </p>
                </div>
              )}
            </div>

            <div>
              <div className="home-que">
                <p>How do I cancel?</p>
                <div>
                  <i
                    className="fa-solid fa-plus"
                    onClick={() => {
                      click();
                    }}
                  ></i>
                </div>
              </div>
              {isClick && (
                <div className="home-ans">
                  <p>
                    Netflix is flexible. There are no annoying contracts and no
                    commitments. You can easily cancel your account online in
                    two clicks. There are no cancellation fees – start or stop
                    your account anytime.
                  </p>
                </div>
              )}
            </div>

            <div>
              <div className="home-que">
                <p>What can I watch on Netflix?</p>
                <div>
                  <i
                    className="fa-solid fa-plus"
                    onClick={() => {
                      click();
                    }}
                  ></i>
                </div>
              </div>
              {isClick && (
                <div className="home-ans">
                  <p>
                    Netflix has an extensive library of feature films,
                    documentaries, TV shows, anime, award-winning Netflix
                    originals, and more. Watch as much as you want, anytime you
                    want.
                  </p>
                </div>
              )}
            </div>

            <div>
              <div className="home-que">
                <p>Is Netflix good for kids?</p>
                <div>
                  <i
                    className="fa-solid fa-plus"
                    onClick={() => {
                      click();
                    }}
                  ></i>
                </div>
              </div>
              {isClick && (
                <div className="home-ans">
                  <p>
                    The Netflix Kids experience is included in your membership
                    to give parents control while kids enjoy family-friendly TV
                    shows and films in their own space.
                  </p>
                  <p>
                    Kids profiles come with PIN-protected parental controls that
                    let you restrict the maturity rating of content kids can
                    watch and block specific titles you don’t want kids to see.
                  </p>
                </div>
              )}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;