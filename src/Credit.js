import React from "react";
import styled from "styled-components"

const CreditWrapper = styled.div`
    font-family: 'Orbitron', sans-serif;
    font-size: 1.5rem;
`

function Credit({credit}) {
    return (
        <CreditWrapper className="credit">
            <h2>Photo by {credit}</h2>
        </CreditWrapper>
    );
}

export default Credit;