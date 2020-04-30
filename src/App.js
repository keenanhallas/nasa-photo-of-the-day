import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header.js";
import ImgSection from "./ImgSection";
import Explanation from "./Explanation"

function App() {
  const [imgData, setImgData] = useState({});

  useEffect(() => {
      axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then((res) => {
          setImgData(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

  const mockData = {
    copyright: "Yuzhe Xiao",
    date: "2020-04-30",
    explanation: "How far away Vangelis dream of the mind's eye Rig Veda with pretty stories for which there's little good evidence courage of our questions. Across the centuries take root and flourish rich in mystery with pretty stories for which there's little good evidence the sky calls to us star stuff harvesting star light. Two ghostly white figures in coveralls and helmets are soflty dancing muse about concept of the number one take root and flourish bits of moving fluff hearts of the stars and billions upon billions upon billions upon billions upon billions upon billions upon billions.",
    hdurl: "https://apod.nasa.gov/apod/image/2004/M31Dec2019final1YuzheB2.jpg",
    media_type: "image",
    service_version: "v1",
    title: "Andromeda Island Universe",
    url: "https://apod.nasa.gov/apod/image/2004/M31Dec2019final1YuzheB2_1024.jpg"
  }

  console.log(imgData)
  
  return (
    <div className="App">
      <Header title={imgData.title} credit={imgData.copyright} date={imgData.date}/>
      <ImgSection url={imgData.url} hdurl={imgData.hdurl} title={imgData.title}/>
      <Explanation explanation={imgData.explanation}/>
    </div>
  );
}

export default App;
