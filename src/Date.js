import React from "react";
import styled from "styled-components";

const DateWrapper = styled.div`
    font-family: 'Orbitron', sans-serif;
    font-size: 1rem;
`

function Date({date}) {
    return (
        <DateWrapper className="date">
            <h3>NASA APOD for {date}</h3>
        </DateWrapper>
    );
}

export default Date;