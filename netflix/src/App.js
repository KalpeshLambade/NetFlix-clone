import "./App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Component/Homepage";
import Footer from "./Component/Footer";
import SignIn from "./Component/SignIn";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/footer" element={<Footer />} />
        <Route exact path="/signin" element={<SignIn/>}/>
      </Routes>
    </div>
  );
}

export default App;
