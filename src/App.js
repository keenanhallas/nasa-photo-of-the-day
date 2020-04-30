import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header.js";
import ImgSection from "./ImgSection";

function App() {
  const [imgData, setImgData] = useState({});

  {/*useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        console.log(res.data);
        setImgData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);*/}

  const mockData = {
    copyright: "Yuzhe Xiao",
    date: "2020-04-30",
    explanation: "Description goes here",
    hdurl: "https://apod.nasa.gov/apod/image/2004/M31Dec2019final1YuzheB2.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Andromeda Island Universe",
    url: "https://apod.nasa.gov/apod/image/2004/M31Dec2019final1YuzheB2_1024.jpg"
  }

  return (
    <div className="App">
      <Header title={mockData.title} credit={mockData.copyright} date={mockData.date}/>
      <ImgSection url={mockData.url} title={mockData.title}/>
    </div>
  );
}

export default App;
