import "../Component.css";
import SignupHeader from "./SignupHeader";
import SignupFooter from "./signupFooter";
import { useNavigate } from "react-router-dom";

function SignUpFirst() {
  const route =useNavigate();
  return (
    <div>
      <div>
        <SignupHeader />
      </div>
      <div className="signup-first-content">
        <div>
          <div className="signup-first-content-logo">
            <img
              src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png"
              alt="pc-logo"
            />
          </div>
          <p>
            STEP <strong>1</strong> OF <strong>3</strong>
          </p>
          <h1>Finish setting up your account</h1>
          <p>
            Netflix is personalised for you. Create a password to watch on any
            device at any time.
          </p>
          <button onClick={() => {route("/signupsecond")}}>Next</button>
        </div>
      </div>
      <div>
        <SignupFooter />
      </div>
    </div>
  );
}

export default SignUpFirst;
