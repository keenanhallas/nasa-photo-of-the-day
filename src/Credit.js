import React from "react";

function Credit({credit}) {
    return (
        <div className="credit">
            <h2>Photo by {credit}</h2>
        </div>
    );
}

export default Credit;