import React from "react";

function ImgSection({url, hdurl, title}) {
    return (
        <div className="img-section">
            <a href={hdurl}>
                <img src={url} alt={title}/>
            </a>
        </div>
    );
}

export default ImgSection;