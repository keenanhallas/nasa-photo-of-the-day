import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [imgData, setImgData] = useState();

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App"></div>
  );
}

export default App;
