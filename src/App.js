import React, { useEffect, useState } from "react";

import About from "./components/About"

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

    </div>
  );
};

export default App;
