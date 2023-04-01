"./Component.css";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const route = useNavigate();

  setTimeout(() =>{logout()}, 30000);

  const logout =() => {
      localStorage.removeItem("currentDataNet");
      route('/');
  }

  return (
    <div id="logout">
      <div className="pagenotfound-nav transparent">
        <div>
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="netflix-logo"
            className="adj-img"
          />
        </div>
      </div>
      <div className="logout-body">
        <div>
          <h1>Leaving So Soon?</h1>
          <p>
            Just so you know, you don’t always need to sign out of Netflix. It’s
            only necessary if you’re on a shared or public computer.
          </p>
          <p>You’ll be redirected to Netflix.com in 30 seconds.</p>
          <button onClick={() => {logout()}}>Go Now</button>
        </div>

        <div className="genere-footer logout-footer">
          <div>
            <div className="footer-t">
              <p>Questions? Call 000-800-919-1694</p>
            </div>

            <div className="footer-m">
              <div>
                <p>FAQ</p>
                <p>Cookie Preferences</p>
              </div>
              <div>
                <p>Help Centre</p>
                <p>Corporate Information</p>
              </div>
              <div>
                <p>Terms of Use</p>
              </div>
              <div>
                <p>Privacy</p>
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
    </div>
  );
};
export default Logout;
