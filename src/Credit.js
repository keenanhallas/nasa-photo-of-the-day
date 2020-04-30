import React, {useState} from "react";

function Credit(props) {
    const [credit, setCredit] = useState(props.credit);

    return (
        <div className="credit">
            <h2>A photo by {credit}</h2>
        </div>
    );
}

export default Credit;