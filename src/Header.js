import React, { useState } from "react";
import Title from "./Title"
import Credit from "./Credit";
import Date from "./Date";

function Header(props) {
    return (
        <div className="header">
            <Title title={props.title}/>
        </div>
    );
}

export default Header;
