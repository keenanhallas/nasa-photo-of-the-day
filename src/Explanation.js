import React from "react";
import styled from "styled-components";

const ExplanationWrapper = styled.div`
    width: 75%;
    margin: 20px auto;
    border-radius: 50px;
    padding: 1% 3%;
    border: 2px solid grey;
    text-align: justify;
    box-sizing: border-box;
`

const CustomP = styled.p`
font-family: 'Montserrat', sans-serif;
    font-size: 1.1rem;
    line-height: 1.5;
`

function Explanation({explanation}) {
    return (
        <ExplanationWrapper className="explanation">
            <CustomP>{explanation}</CustomP>
        </ExplanationWrapper>
    );
}

export default Explanation;