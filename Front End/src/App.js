// import logo from './logo.svg';
// import './App.css';

import FrontPage from "./components/LoginPages/frontPage.js";
import LoginPage from "./components/LoginPages/loginPage.js";
import SignupPage from "./components/LoginPages/signupPage.js";
import OTPPage from "./components/LoginPages/OTPPage.js";
import ForgetPage from "./components/LoginPages/forgetPasswordPage.js";
import MainPage from "./components/LoginPages/mainPage.js";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Dashboard from './pages/Dashboard/Dashboard';
import Setting from './pages/Settings/Setting';
import About from './pages/About/About';
import Home from './pages/Homepage/Home';
import Profile from "./pages/Profile/Profile.js";
import ProfileEdit from "./pages/ProfileEdit/ProfileEdit.js";

function App() {
  return (
    // <div className="App">
    <>
    <Router>
      <Routes>
        <Route exact path="/" element ={<FrontPage/>}/>
        <Route exact path="/dashboard" element={<Dashboard/>}/>
        <Route exact path="/Home" element={<Home/>}/>
        <Route exact path="/LoginPage" element={<LoginPage/>}/>
        <Route exact path="/SignupPage" element={<SignupPage/>}/>
        <Route exact path="/OTPPage" element={<OTPPage/>}/>
        <Route exact path="/ForgetPage" element={<ForgetPage/>}/>
        <Route exact path="/Profile" element={<Profile/>}/>
        <Route exact path="/ProfileEdit" element={<ProfileEdit/>}/>
        <Route exact path="/setting" element={<Setting/>}/>
        <Route exact path="/about" element={<About/>}/>
      </Routes>
    </Router>
    </>
    // </div>
  );
}

export default App;
