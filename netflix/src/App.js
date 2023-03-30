import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Component/Homepage";
import Footer from "./Component/Footer";
import SignIn from "./Component/SignIn";
import SignUpFirst from "./Component/SignUp/SignUpFirst";
import SignUpSecond from "./Component/SignUp/SignUpSecond";
import Genere from "./Component/Genere";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/footer" element={<Footer />} />
        <Route exact path="/signin" element={<SignIn/>}/>
        <Route exact path="/signupfirst" element={<SignUpFirst/>}/>
        <Route exact path="/signupsecond" element={<SignUpSecond/>} />
        <Route exact path='/genere' element={<Genere/>} />
      </Routes>
    </div>
  );
}

export default App;
