import React from "react";

function Explanation({explanation}) {
    return (
        <div className="explanation">
            <h4>Image Info:</h4>
            <p>{explanation}</p>
        </div>
    );
}

export default Explanation;