import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
    font-family: 'Orbitron', sans-serif;
    font-size: 2rem;
`

function Title({title}) {
    return (
        <TitleWrapper className="title">
            <h1>{title}</h1>
        </TitleWrapper>
    );
}

export default Title;