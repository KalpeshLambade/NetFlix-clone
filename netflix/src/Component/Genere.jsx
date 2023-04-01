import { useEffect, useState } from "react";
import "./Component.css";
import { useNavigate } from "react-router-dom";

const Genere = () => {
  const [shows, setShows] = useState();
  const [currentData, setCurrentData] = useState(false);
  const route = useNavigate();

  useEffect(() => {
    fetch("http://api.tvmaze.com/search/shows?q=golden girls")
      .then((res) => res.json())
      .then((Json) => setShows(Json));
  }, []);

  useEffect(() => {
    var currentUserData = JSON.parse(localStorage.getItem("currentDataNet"));
    if (currentUserData) {
      setCurrentData(true);
    }
  }, []);

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
          <h1>TV Shows</h1>
          <p>
            These days, the small screen has some very big things to offer. From
            sitcoms to dramas to travel and talk shows, these are all the best
            shows on TV.
          </p>
        </div>
      </div>
      {/* Show section */}
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
            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTVWwGF4TVyF3-z6YvjdAtqVup5oKHTlK-QRmQYrEz_HX_qI3ZGRiSAFOXAIqcmLpu2B8TQWteMdILB6Zl3VaLLtHWXUHsE_vmXgufINoqYJjuLDrUcV_JwjJJ-3O8gURiyp.jpg?r=4d2"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Wednesday</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdFmMkQfLjnPnKzK-j0S-5PSWLCoJfVHsDUBQYX2UI8qkIUe_dk-DNSprO6bd7j8zik5vcVWNHQDjGlvXgbuV3yi30Tb7nH1pDzqKwCcubxGfucD5K0t9SKPxqw_6DX12NED.jpg?r=31e"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Lucifer</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdNgatqAEYmpnLfi6tjKSmgKb2busntH34VDgo3JMSk7y6Jdwj4PXUFbCXe_YQVzjM69gNVoqTAEF82aMjY_KMlRHPJCtrh3k2d0UdqH1kxnACnKx2EBGZ4A1Y9O0joN9bXf.jpg?r=8a4"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Money Heist</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdRealouzn4-PlLmziE5wSpIHQUcPj4tT-I4p0Z8ZAyjGFdLHxocesXAtLbZcBqUSQaKwIVdJ6icfGLxDu0SsYZPkMAn5vTJ3vs.jpg?r=01d"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Braking Bad</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRw6CELmOFrRGwZUNM86Fy_1ZH08Pk6Ej45l1rm7L6OQtBmjRHEzJP-Sm2kXsBh7zepgYwrAqRWGGO_5CWMCBLtYdYKV5VY3wadRT_7sGbPvU7wuENsrb2v_QR1UwWPdoFtM.jpg?r=a07"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Peaky Blinder</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ09ogaG8kIDE7UEPDnMq48jY7taXuaOgZk7CqlOsePfu44CQRPIQcxJNEZV5KSv3g88HKXbyg5dmhg3WjR12XabOrnnKOEzBeYTtwG5C2JYxzC9UakhMpPYlWN3SdxxkYIa.jpg?r=cd1"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Khakee: The Bihar Chapter</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRO8pPPOtJycBHWBCCnmn21qTcH2X3q916BCzawBvJTpds-k7QZXz6JOzwyb_tLbleyMGjmt4XeQHJf9Vq6T6QHhqEYmMbrNt4HmYgQmRJY3_6OarbKYjP9ADCFnVDAQv-_pJ04qFGrhK8wbVXEwDPYXWwKpkslaRkBj8GW5IUXvbG09Gf5Uj3Bh4i7Rq8EirewcYlLhrijLgeRMZiZbWjZQyv2jZG0NLPcQv1IPlkBpZqlv9sWfjD-B5cVEQN8gpcZE62qM3Ywqv98Xdh1BKjYj6w.jpg?r=ef7"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>The Blacklist</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVDLvFEuXKToqOhVC5Elj2JjA9YcjpGhgtQl3HgMQss-FnwfyQ3-cIKeALZenX65ML0GsxJlW0wq5XPWAR1P7FeP-Wxw6NzXxWv3YFhjVA47y9jWstsDwZj4zIVpGW89hs61.jpg?r=2c0"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Narcos</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXRydynT1qct_7p8RDNQXuSRXNlZlfoT34fDyCQIgqgSqSzuBy0dZ6XVI6a2b6rO_WZTFgHGFxbbnk49oApIZ8Xv3JOH3K-33E6jNzEfRKZTydu22Vz8aenwjA7WDmazCmoy.jpg?r=860"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>She</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd7rH9ktX2s1eh4Fa3Q0qFM3fsTXYutG01voTDcNjZziLdi71fAxhc7YghyhccmZXvIeZAmMY_NDS_XXXyr3zIfY8JmIuJ8IQdzdq2mNFg-zCROyVZD4blf20q8AWqcrjfYw.jpg?r=38d"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Dark Desire</p>
            </div>
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
            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY0RcP2v5eDgfdDT7sgixRZnmGheP1Ep_EDljQKrkE94zwC-agy9gaoueT3I5Rou57FWWCZauIrS7U3ug6z84177vvy43jiWeKA.jpg?r=d51"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>True Beauty</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeQNQuddGF5GKvF-ErrW9utXs4yG9X_X7HtuZLikfuvpIkMxDblQcZ1JRiIAHCGU_5L2CBZzuY6dx80IQeT3CcT55jv47vYr-c0HJ-eL4fWFUXQujaLTRyNKFDhCorczV__u.jpg?r=676"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Extraordinary Attorney Woo</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSPxIGcFHASqWvao6j1B_rrLQq_8KBAraWBHPhM2nkHUcJ4KxxpoZjAzLHZqKSC5PAGLOrsBEu7DwCZKleY-Qds20w2q5WXsIyx6JNHeZpeJrowwyIEY8bnDZrjdt13ijRaa.jpg?r=48d"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>All of Us Are Dead</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdQ2oSgoKlchD65uLZ5TwOt0NkqnhFCKqoPvDlpGxPpYzbXTro280RJl61ZDUqVOYcTSy4T55enrbbjabQBtuH1we0GRvKk-VGPmzri04wMyIF7lP1SVHAXyxve43L6sXJpYSRw5sc4rozqQDNomNckOUZz2fJhJrNajTTSkRSqvvpnpTycaj-g83ijre6-EWkArJ1ph53D1MkY173U9FYlPKaHog1EASHMO27p7W04UGs6HUMR3BN39p9bJzRQ_mnUztbAJbG1yjuXinhYmQ6abyGl4s2nsrETj-phRZKhWETR5msGLbcKP-NBnvSCvTNfymV_drgwzbfRHrbSykqUlh-1L8cItrJtTycwkjIyv0SIVxIuB7YCm8q4Ascfi3MmZN_4LumHPUmfve_2vml9kGmikR9eO9KZKuoqUEbmZE5IlrmXrRn4BtmbMtplPo3bTyNbt.jpg?r=c5f"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Crash Course in Romance</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQVceRFMhwlZxuy0DVWm_hSO5CsDUHu-QgYIqUEy6qJsbdFwzDESUcF4i8-HmmYMPUM63es4qn97shNRpEvR1A2y1HvJ5LRanQYnIzaTtIiESdcXejfZkredgzEpCtnTKLHC.jpg?r=c47"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Squid Game</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABR73isZnjjTS75piddTBIYO7rE20Ap09KpSbepZV-KI83TWDNF3yxBfDbEcXPMap4c0-Da9UCn-kwYA7Yl0PLuqk9hgSs8KsY3Weo2Wjslx4To5-4p2FywUmpDxCbbe6LsFl.jpg?r=49c"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>It's Okay to Not Be Okay</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZs-yK7_Kn3xLGN4aU3i_6G_htHAZpxIt4d-zZFUsRSr0XPlykoeLyhUp2Mj5NzBnjy9A3RpjS4bQ165jN0OJPaKzuhRlT_OlH9zLCqj8BspsiOBVC6RAu-oeTkD_b2oxBTW.jpg?r=b5d"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Vincenzo</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS8k8Hreil0X7g3iPzFhozlKPdIKsWiHvKEYlJJkpmvdhei-FJLKkEZbebgPnB7VHxKVO3cgxx9va7szKLCqMTahN9csuQqsQn3PdBMA29CfiFoEDRGnnFx8r2EsmMQf4Hpt.jpg?r=b53"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Hospital Playlist</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVZFj7RIWCuK5F1ITyl9bU9R6kCAuPQFpAq14Uq2TKJ4Q8lvdWh3NkpUjWdflga4g7K9CbFDqPgEMNyWaIbrhp5BhR9Lf4kAelMB7y08wZ0zhLBsXoOLuil_SyGeTRbeWsh_.jpg?r=c02"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Business Proposal</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABdMo2SByOpaNPiYhol-GGTAL8RqC6cu2NB8wKmOdpnSJAxSm9lW8fe5SyEKgHVRIhD3wlBidJqQiJ85DqGgTRQmKYfFIXNJ0dg0.jpg?r=c65"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Ghost Doctor</p>
            </div>
          </div>
        </div>
      </div>

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
          <p className="show-maintitle">Anime</p>
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
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSbmFQBKxveG71r4iZUYUdTWlnhAcWs2Yw3W4DYFJWqCbSwlH-Vs9QS_WB8fD1wkZ_cjKELACLI9G60wFjzFfCcHiykilgHVKjg.jpg?r=777"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Naruto</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSiE6c_oBFh6sJ5kfZZkht_hdBWcpvGGaATzcCggupR4xS1fyG45eppKNx23zPRHkW7P05AqKuXfytGWBMsZ8JEV9DYPbdKzrcwm_OPOeUaOo4ftlD568jckWBJLVXOLn12T.jpg?r=c99"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Gudetama: An Eggcellent Adventure</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVwvLsJZH93YebxkvNsk7JCUgDF123qq2gsfC4C8DX_UXh19HfnGHnhtEGQJAQozilRQFA3Q5K0YcUICKh5wV2gGJ0gqRgqmdVo.jpg?r=262"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Naruto Shippuden</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYImHnnY9WeIyvY3vqTfze2-ifLyv_xA5C5JqyLldq9p7j0qe2ISvriv1M2Bpl1DpTVihFp_Ez6AcdrwthCO5J5KWHi34DFnwX0.jpg?r=043"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Demon Slayer: Kimetsu no Yaiba</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABd_D2WGrn_mum8KLmLM4QWcMIN--R3jtwpflv8qIzeiS_PyjRi5JoyP_37ds7P08YckCUcSlQdD0a1evYxcEK0YCgqs3-78XIFE.jpg?r=c1b"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Jujutsu Kaisen</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSQpZQ4j4WhGwjjhAqPW026m06f62EWxDiQfPyaQ06kM2TZ6skCpYqlHt9N8r1waMaL1VnmCJlng7vmuSm4kSdgQDPMrsuv5p9g.jpg?r=aed"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>One-Punch Man</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWfaBKSstvHbggK5RzOa8rktXWFOR6EehCOeNO-PYWbol2fHKHfjzN646ixPmZ2VXPkMIGLWXWh7enjwa3PTQ_PyTOCUHvtS5_g.jpg?r=567"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Black Clover</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYHqW7Xq903ajmb_7FozMlWiMeeeHu8eMcJc8-W14nL6f18_QmKpeNTwc6vhK6ZyKz7KFDU-Qxq96t0uXuRYOVtqBrRyqbx2OBABdluWR2sZrT8kJdieJ0ERFZEnYn_a_4WdP37OYjv4VIX0PDNko2MI5S_eLDvYpLuvT86mI-iBs0-B7MW7PUxDG-g5w3hLeVr28PyXgnbYNFNUU_Ru73wp2bNxV2tBcSeFuWVJYEKajaNyoq-I5b71vM0sptFCJa2sfw_WA0wBdXRmcAqw2oTWO6z-6SoGTdY5iWNw-2f-EviVzKplBwUHXcTQjLiwWsHca6xM4ZkgI6Pl5SdZ0HNJ5BScVAQmEgEnjEb0mNC-mMCo9KhemOggolL5x3xmduW3bXAMKkQqPMQf_RqylI-zT7uxUYfc6eTiXQHeOR5j.jpg?r=be1"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>My Hero Academia</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcCyJVxZ5k6rLbYiQMlXq8jlxwpR4jRaC4twUbqhR4mh4TvT0JSXwgiym8mbULGHdePkxeZTFtcmjyY84npeQqgD5khG7ddzAQ_kB2ud-GZrFWj_lWtb7uuNBJwgama-xAMD.jpg?r=1d9"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Lookism</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWtsclHsQzIYLqQYqZ4E9vOre0NNlYJIEVXUt-CAF2Wofo6tEHTKBNGCVGsUm_xYcsRmn1hTwkB3HUD0art4q3LFn6TrWx_xcH4.jpg?r=888"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Chainsaw Man</p>
            </div>
          </div>
        </div>
      </div>

      <div className="shows">
        <div>
          <p className="show-maintitle">Indian TV Dramas</p>
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
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeId3IrAdVJVhoI7UCPqRQpzVGC97_D9BAxJs2GBSJnrKXHamjafAjcr9dngpdMxTl8Ka9Vj4O3o38UNYapFNSCk7VpD8TB9L6o-WbEIGtzgHN4jrA3uNhsaLC6mncOTd-xO.jpg?r=7f3"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Rana Naidu</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABStI6N5GN1Xne6tHLJPGl5K2FIidUPG0sylr3yO8c68oz8Ex1tTQqOgAJ4EgC3uzkMbDrsAnzVr77FY_wPFwF_WBwb4iB1JzmpEyePFQGsCXwTZEmwUiQe0r7A1apFq76dSA.jpg?r=07f"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Mismatched</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZgjXpSIdJKSxn9T81YNM4ye3A8j66m0dqIJ6mUIWaYFI_gMqr1QY-1Q9JH5SLRDqhQxWXow7fDT0vekQX8pI_9BYOrff1r-lWTzAVkxrh79l9xpCHIfKsSkLhC0_efWB1lB.jpg?r=607"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Kota Factory</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABWN2fzYdjFXJzbPSn-W2UhgO3hOzJ9K18bqEoiGV84rIzTICy721dUZagT0a4iORXvjrxbxqeBHyH87ZMF1il_BK-cRVX9bMEyyB4pePXYQX_PJGx8ChqAf1q6CVV6AJHcBr.jpg?r=e02"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Little Things</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQ2hZKF1ROW5vKRZcKqVLiBmsQor5b6WlwTuavggaov44QrD3pVkE375DPCq9tVMxfKmMvOit_-zbVgnh7lBX-wdAvNpG2spjA4QlktzMoEIRWOhkmsju9CMbcPQcsHGMVUs.jpg?r=9dc"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Delhi Crime</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTKmQV3Sv7ssor7LOPkEMzIAK3cxGqmMWS10ZAIdibwnHDjNWbQcx9kF2qosadys7iwdj1O8iC5ivl-lvb0g8rTgiBr4hJsW36dqPDHgKzlAlf1W1oBzdeG_VhXPicA_AisM.jpg?r=bad"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Sacred Games</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcDiqD2vXSdh2jtc4ibjyNon9Gq54il4cKtUElP6xi7N3XF-0x8lrI_s_dsvtQPJLiViZXDmmKUzvnTVNV2XtJO1RUuY4L9BnglRP0gogEznmNn6L0y13I6jZURLoFM-0v5F.jpg?r=ca5"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Jamtara - Sabka Number Ayega</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABT1wb_UMSuSzEobVL6-9VyIeOFGXL0TwF-5e0ReMIIy5jaX991hjPBLwDaXmaOQT9-Zt68IjVF7fi9AQ3-vFwNtruRQJWIqBurN0JHXFWpl_79dVuy7O1s8NbLY2fWuBIbvu.jpg?r=ef5"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>The Fame Game</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABVPnFc0wLJR5XXMpdpXG11T8w62SPrg81ixHOvZL3G9rGtjeZWqcStaBma-dtutT3rGQSwk6NNKKROjuaEUiu9sh8cg31R6NmKDO1Blncl-VYzdww3OpUfosrf7Ra0Ffwh8M.jpg?r=e5a"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>CAT</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZXt-8TATBCz5on8zKN4htyHou6d8OyFqPf-wCY0EKEHsW0a7sZmyxt9818Kb5s6GuxGhNvSKbdaG69L1BWaANiFlZ77tbDmEmKBLGvMuCCqkV97VeyBysRfnBZ55UbM7KtY.jpg?r=755"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Trial by Fire</p>
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
                <div className="box apibox" key={i}>
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
            {/* <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfgWRIvjjiBc8nUkCKq9Kzq7Ic6O-18phvePQVN_UBxuvCqp39W96ZTW7s6qQLijkS7Di2jL3K9pGxRenzp9NnTBIq5wty1uiG0_vZs0BN7rFgsrOtOOYiexz5HXiP98rOwE.jpg?r=1d3"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Ginny & Georgia</p>
            </div> */}
          </div>
        </div>
      </div>

      <div className="shows">
        <div>
          <p className="show-maintitle">Romantic TV Shows</p>
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
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfgWRIvjjiBc8nUkCKq9Kzq7Ic6O-18phvePQVN_UBxuvCqp39W96ZTW7s6qQLijkS7Di2jL3K9pGxRenzp9NnTBIq5wty1uiG0_vZs0BN7rFgsrOtOOYiexz5HXiP98rOwE.jpg?r=1d3"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Ginny & Georgia</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABcWT3djLEhVmeo5bQG9y1XmTj_GqDP-W4OLCuQItRU2DLFxWXCbuHPsz8x5jnWaIwisgKSPGpp3whLucmIHXnYQMcrZzPdnOyJftQa5UmXwrSxJnhlUVgia7PWyDl18Fc_IB.jpg?r=68e"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Hometown Cha-Cha-Cha</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZttIBdimWkdb8Qy1BMTMESib1Lw5bRxfbBU2oJ836rrr0Anu210l5SgJA1jQS1cKSElM8zXvyE-nal8O9X1xbRQGK2b2xgE4Gc.jpg?r=037"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Gilmore Girls</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABbEmV4XsfTxBq7hjH6uUWUf3_YRLHhnJcerAYs1ovfI9_bSjM33FpdOCurbddk_PvMtJf8AfuFcY15ZhAZCVcQCzvv2A0ynBIJzzbC6aOLreoaqJrvB-xXVXKG9K6TcFvA2R.jpg?r=257"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>The King: Eternal Monarch</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABSUh4BGjxp1mgXUVOcSQaQip1nu7lZKmFddjTXjLHbubTelQot8GkomsIlJK_0lHtWAQ632yrTSEskvM7pfuHPmSNTgKEp2DMHk.jpg?r=b1c"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Young Lady and Gentleman</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABY4xCqp-KVqhGV875tl72m58EZn7bOT9vRfsba-rqIycj5gB-crgOSKIjc7duf5qqIqhI-a7CbJnhyhyZUTgdIszu0isFpY4SII.jpg?r=ed6"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Tale of the Nine Tailed</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZPg9S_5HYALPLi0dDtA-BuDrpC5BehvzcVq5p783qwo-VcrNtnip8NEduggE3Wdj_dhGnGtVyLeZ6UNtWXr4451W0sO1ntK1FA.jpg?r=433"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>I'm not a robot</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfgknXoOtg3Lg9ui9SZKKUdw3eL8NXrGHsGGNcOKfOb-nHGW1rdYqmWUD-20yE3tkUfrXI8qfAfX_GMvVUBlxS2z0ycd_H-goUk.jpg?r=3c4"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>The Legend of the Blue Sea</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABXmeUYqj_onkCMP65G1Y8Z3EhsVduCefSdMwDy5OFuUfIatxNvMUTIOet-Pui3_fad1HdEy53Vfi6Hefi4SFnic2eeweYkPB-oM.jpg?r=c89"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Doctors</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABeKyt0E_DvQtFCqYjueRh-NgEOLz5qbDjGGpGWYJAAS9UaVgFgfcogleTBEznTNZcIkb9azyS9Rs5NT7wqzJYkFYSoEVHVTUJamnr0OP5SbwRBfIzYC-zlVh_HDhQV7NDw1I.jpg?r=b20"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Forecasting Love and Weather</p>
            </div>
          </div>
        </div>
      </div>

      <div className="shows">
        <div>
          <p className="show-maintitle">Documentaries</p>
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
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABaWj6vgh_TVH9qkHZL3ZpBcXMWOSIXZy1eBBuvukPDJTFM5m5vh0VEZsFaWp1cu8kjqA-UwcAQNpDWS8FI_aT1j7ZWz0fwOsBDbSIREzO3q1XvagMOYDccgfW8B8JXKrvQ3m.jpg?r=1f3"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Our Universe</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfZfcn2m5dBhBsVorOq1GwQX3TGKqP6tQRx9nw_XorUYi2gxPmYlNtnmsnxDdxjOkFKBAel0F8Sxf10Wm9E2Jx7pOy6xwgCTMUQFqH1hzWsE_m9sEvoT0OswDF7BvSeIvheT.jpg?r=8d6"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Wild Babies</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTXOvwmV76nC4gL6Jd3QMuyWH21apmjFci78u5K4RSXhXW-9DXrb8xoGWl1TkvJUJ2U36isWqO4ZZm0zfoC37xkfxfOw-ibzJ1yjhqXayWzllQE5jRo_z2qCgYPpZpHwsUy0.jpg?r=844"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Greatest Events of WWII in Colour</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABfFfAX_vN7pZ-jI496qcallwmS9KaH6QStIDToAESkg0oXh85skK8QNy_vqibKZbEnjeXv62jyPHAaFrR3rBIeige5fT0YhwHkb3z_DtrDw31ULcifzzmiEv8VnU3LQNvIpR.jpg?r=614"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Our Great National Parks</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTUVW-EMmXaMouXB2UqNhcAdDwD2MvwmhfcQrQCQwQH8JgCKoNAguUiFICIhHrOwt19neDjyE_2dWacbxBbozeGSv9oRfJlIVg_EXeGSS-H2h-gVLDtVT5gPPd0eZcjMh4f3.jpg?r=d6e"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Earthstorm</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABZuKCSTdG00QvHpHSkaMl9L040mtQYS-NJkqfk02sIJb7RRJp1dXR2mcUyLhq39B85FN58KK92IAUln5NI0Z1UUNM3Lq_7_eECFWm9wMojsEUijYU6inhsLmdc3rFqiKu_HY.jpg?r=253"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Animal</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABRpE19WghtzGTagMiXFRUjtxCDuM6VNBLwmUyQzxXaYfWxwfaLuUTzYQMZCkyiDIDogNKtozdLN6VOhYGsLDbvwv1faYcirMoYRhyQbY3f0vGCR1Adu6Qz1Oba_YUrcV5-BR.jpg?r=5d8"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Top Secret UFO Projects: Declassified</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABQVJSg-wmL1ChBTsty-pc7APhzLL8jhaFY5LuZzVbFcHJTsKSVLP-H_iSJOh-H0KgjX3GHGy86DpBZbt4pl4nsqCegIT-OrcoEO_4CowMUjJcBi38b0aCtWPjtWZiVfuvY73.jpg?r=43a"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Life in Colour with David Attenborough</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABUUtuhh70-VnGUP8wdaV-JMxqjncqxCtsYJqIc2eHqOEZ1USvVREJz_3BXKjDtbHokj5KX703NRB5k6khChz2ZUPx1CwbIIO8cSkjLyOm74svtzjEOjX0WaRpe3fZZc5KiqP.jpg?r=a94"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Bad Boy Billionaires: India</p>
            </div>

            <div className="box">
              <div>
                <img
                  src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABYZOi2JzEZWxhgAQGz1UgcV1oDdK1Q3CxpdNPcTC6QWmUH__BZEFvnYjN1LXIZcPMnWkCcfYFlphKFI-VXXbcxx3RbswUpxNambG4cPJJ5MAmwJclwiaga7aJ2U_8t5PuzZj.jpg?r=e10"
                  alt="show-img"
                  className="adj-img "
                />
              </div>
              <p>Ancient Apocalypse</p>
            </div>
          </div>
        </div>
      </div>
      {/* end of show section */}
      { ! currentData &&  
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
          Netflix has an extensive library of feature films, documentaries, TV
          shows, anime, award-winning Netflix originals and more. Watch as
          much as you want, anytime you want.
        </p>
        <button>Join Now</button>
      </div>
    </div>}
    
      

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
