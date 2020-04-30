import React, {useState} from "react";

function Title(props) {
    const [title, setTitle] = useState(props.title);

    return (
        <div className="title">
            <h1>{title}</h1>
        </div>
    );
}

export default Title;