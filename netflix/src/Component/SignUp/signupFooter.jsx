import "../Component.css";

function SignupFooter() {
  return (
    <div id="signUpFooter">
      <div>
        <div className="signUpFooter-t">
          <p>Questions? Call 000-800-919-1694</p>
        </div>

        <div className="signUpFooter-m">
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

        <div className="signUpFooter-b">
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
export default SignupFooter;
