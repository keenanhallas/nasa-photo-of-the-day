import React from "react";

function Date({date}) {
    return (
        <div className="date">
            <h3>NASA APOD for {date}</h3>
        </div>
    );
}

export default Date;