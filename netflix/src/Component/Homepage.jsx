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
              <i class="fa-solid fa-globe"></i>
              <p>English</p>
              <i class="fa-solid fa-caret-down"></i>
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
                <input type="email" placeholder="Email Address"/>
                <button>Get Started <i class="fa-solid fa-angle-right"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
