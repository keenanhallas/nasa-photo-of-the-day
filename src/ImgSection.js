import React, {useState} from "react";

function ImgSection(props) {
    const [image, setImage] = useState(props);
    
    return (
        <div className="img-section">
            <img src={image.url} alt={image.title}/>
        </div>
    );
}

export default ImgSection;