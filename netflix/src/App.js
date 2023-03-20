import './App.css';
import {Routes, Route} from 'react-router-dom';
import Homepage from './Component/Homepage';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
      </Routes>
      
    </div>
  );
}

export default App;
