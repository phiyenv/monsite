import React, { useEffect, useState } from "react";

import About from "./components/About"
import Header from "./components/Header"

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
      <About data={resumeData.main}/>
      <Header data={resumeData.main}/> 

    </div>
  );
};

export default App;
