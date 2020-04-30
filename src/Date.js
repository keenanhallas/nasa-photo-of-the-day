import React, {useState} from "react";

function Date(props) {
    const [date, setDate] = useState(props.date);
    
    return (
        <div className="date">
            <h3>NASA APOD for {date}</h3>
        </div>
    );
}

export default Date;