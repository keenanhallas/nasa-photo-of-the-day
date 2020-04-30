import React, { useState } from "react";

function InfoSection(props) {
    const [explanation, setExplanation] = useState(props.explanation);

    return (
        <p>{explanation}</p>
    );
}

export default InfoSection;