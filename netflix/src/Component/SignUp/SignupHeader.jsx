import { useNavigate } from "react-router-dom";
import "../Component.css";


function SignupHeader() {

  const route =useNavigate();

  return (
    <div id="signUpHeader">
      <div>
        <div>
          <img
            src="https://www.freepnglogos.com/uploads/netflix-logo-0.png"
            alt="netflix logo"
          />
        </div>
        <div onClick={() => {route("/signin")}}>
            <p>Sign In</p>
        </div>
      </div>
    </div>
  );
}
export default SignupHeader;
