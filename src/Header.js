import React from "react";
import Title from "./Title"
import Credit from "./Credit";
import Date from "./Date";

function Header({title, credit, date}) {
    return (
        <div className="header">
            <Title title={title}/>
            <Credit credit={credit} />
            <Date date={date}/>
        </div>
    );
}

export default Header;
