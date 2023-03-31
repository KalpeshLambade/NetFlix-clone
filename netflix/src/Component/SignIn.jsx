import { useState } from "react";
import "./Component.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

function SignIn() {
  const route = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const featchInput = (e) => {
    var name = e.target.name;
    var value = e.target.value;

    setLoginData({ ...loginData, [name]: value });
  };

  const checkLogin =(e) => {
    e.preventDefault();

    var dataFromLs = JSON.parse(localStorage.getItem("userDataNet"));

    var flag=false;
    for(var i=0; i<dataFromLs.length; i++){
      if(dataFromLs[i].email === loginData.email && dataFromLs[i].password === loginData.password){
        flag =true;
      }
    }
    if(flag){
      localStorage.setItem("currentDataNet",JSON.stringify({currentEmail:loginData.email}));
      setLoginData({ email: "", password: "" });
      route('/genere');
      toast.success("Log in sucessful");
    }
    else{
      setLoginData({ email: "", password: "" });
      toast.error("Incorrect password or email. Please try again ");
    }
    
  }

  return (
    <div id="signin">
      <div className="signin-back"></div>
      <div className="signin-logo">
        <img
          src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
          alt="netflix-logo"
        />
      </div>
      <div className="signin-page">
        <div>
          <div className="signin-page-top">
            <h2>Sign In</h2>
            <div>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  featchInput(e);
                }}
                name="email"
                value={loginData.email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  featchInput(e);
                }}
                name="password"
                value={loginData.password}
              />
            </div>
            <div>
              <button onClick={(e) => {checkLogin(e)}}>Sign In</button>
              <div>
                <p>
                  <input type="checkbox" />
                  Remember me{" "}
                </p>
                <p>Need help?</p>
              </div>
            </div>
          </div>
          <div className="signin-page-bot">
            <div>
              <p>
                New to Netflix?{" "}
                <strong
                  className="white"
                  onClick={() => {
                    route("/signupfirst");
                  }}
                >
                  Sign up now.
                </strong>
              </p>
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not
                a bot. <strong className="blue">Learn more.</strong>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="signin-footer">
        <div>
          <p>Questions? Call 000-800-919-1694</p>
        </div>
        <div>
          <div>
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
        </div>

        <div className="signin-footer-third">
          <div>
            <i className="fa-solid fa-globe"></i>
            <p>English</p>
            <i className="fa-solid fa-caret-down"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignIn;
