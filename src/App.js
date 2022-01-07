import React, { useEffect, useState } from "react";

import About from "./components/About"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Contact from "./components/Contact"
import Resume from "./components/Resume"
import Portfolio from "./components/Portfolio";


import "./App.css";

const App = () => {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/resumeData.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <div className="App">
      <Header data={resumeData.main}/> 
      <About data={resumeData.main}/>
      <Resume data={resumeData.resume}/>
      <Portfolio data={resumeData.portfolio}/>
      <Contact data={resumeData.main}/>
      <Footer data={resumeData.main}/>


    </div>
  );
};

export default App;
