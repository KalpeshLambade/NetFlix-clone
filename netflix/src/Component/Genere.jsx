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
      <div className="shows">
        <div>
          <p className="show-maintitle">Crime TV Shows</p>
          <p className="show-subtital">
            {" "}
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
    </div>
  );
};
export default Genere;
