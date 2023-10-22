import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import Spinner from "./components/Spinner/Spinner";
import JoinUs from "./components/why_join_us/Join_us";
import Signup from "./components/SignupPage/Signup";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Event from "./components/Events/Events.jsx";

function App() {

  const [isLoading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, [])


  return (
    <div className="bg-black">
      {/* <Navbar /> */}
      {/* {isLoading ? <Spinner /> : <LandingPage />} */}
      <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
