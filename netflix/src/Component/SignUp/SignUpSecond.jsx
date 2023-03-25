import "../Component.css";
import SignupHeader from "./SignupHeader";
import SignupFooter from "./signupFooter";
import { useState } from "react";
import { json, useNavigate } from "react-router-dom";

function SignUpSecond() {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const router = useNavigate();

  function submit(e) {
    e.preventDefault();
    var dataFromLs = JSON.parse(localStorage.getItem("userDataNet")) || [];

    var flag = false;
    for (var i = 0; i < dataFromLs.length; i++) {
      if (dataFromLs[i].email === userData.email) {
        flag = true;
      }
    }

    if (flag) {
      alert("Email Already Existed");
      setUserData({ ...userData, email: "" });
    } else if (userData.password.length < 8) {
      alert("Password must be of 8 characters");
      setUserData({ ...userData, password: "" });
    } else {
      dataFromLs.push(userData);
      localStorage.setItem("userDataNet", JSON.stringify(dataFromLs));
      setUserData({ name: "", email: "", password: "" });
      router("/signin");
      alert("signUp Sucessful");
    }
  }

  function featchData(e) {
    var name = e.target.name;
    var value = e.target.value;
    setUserData({ ...userData, [name]: value });
  }

  return (
    <div>
      <div>
        <SignupHeader />
      </div>
      <div className="signup-first-content signup-second-content">
        <div>
          <p>
            STEP <strong>1</strong> OF <strong>3</strong>
          </p>
          <h1>Create a password to start your membership</h1>
          <p>Just a few more steps and you're done! We hate paperwork, too.</p>
          <div>
            <form
              onSubmit={(e) => {
                submit(e);
              }}
            >
              <input
                type="text"
                placeholder="Name"
                name="name"
                onChange={(e) => {
                  featchData(e);
                }}
                value={userData.name}
                required
              />
              <input
                type="email"
                placeholder="email"
                name="email"
                onChange={(e) => {
                  featchData(e);
                }}
                value={userData.email}
                required
              />
              <input
                type="password"
                placeholder="Add a password"
                name="password"
                onChange={(e) => {
                  featchData(e);
                }}
                value={userData.password}
                required
              />
              <input type="submit" value="Next" />
            </form>
          </div>
        </div>
      </div>
      <div>
        <SignupFooter />
      </div>
    </div>
  );
}

export default SignUpSecond;
