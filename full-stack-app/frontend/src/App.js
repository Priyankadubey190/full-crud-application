import logo from './logo.svg';
import './App.css';
import { Signup } from './Components/Signup';
import {Login } from './Components/Login';
import Navbar from './Components/Navbar';
import AllRoute from './Pages/AllRoute';
import {WomenClothData as MyWomen} from './Pages/WomenClothData';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoute />
      {/* <Login /> */}
      {/* <MyWomen /> */}
      {/* <Signup /> */}
    </div>
  );
}

export default App;
