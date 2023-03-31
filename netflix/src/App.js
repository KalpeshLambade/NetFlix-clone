import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Component/Homepage";
import Footer from "./Component/Footer";
import SignIn from "./Component/SignIn";
import SignUpFirst from "./Component/SignUp/SignUpFirst";
import SignUpSecond from "./Component/SignUp/SignUpSecond";
import Genere from "./Component/Genere";
import PageNotFound from "./Component/PageNotFound";
import Logout from "./Component/Logout";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<PageNotFound/>} />
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/footer" element={<Footer />} />
        <Route exact path="/signin" element={<SignIn/>}/>
        <Route exact path="/signupfirst" element={<SignUpFirst/>}/>
        <Route exact path="/signupsecond" element={<SignUpSecond/>} />
        <Route exact path='/genere' element={<Genere/>} />
        <Route exact path="/logout" element={<Logout/>} />
      </Routes>
    </div>
  );
}

export default App;
