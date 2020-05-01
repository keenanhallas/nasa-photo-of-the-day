import React from "react";
import styled from "styled-components"

const StyledImg = styled.img`
    border-radius: 50px;
    padding: 2px;
    border: 2px solid grey;
`

function ImgSection({url, hdurl, title}) {
    return (
        <div className="img-section">
            <a href={hdurl}>
                <StyledImg src={url} alt={title}/>
            </a>
        </div>
    );
}

export default ImgSection;