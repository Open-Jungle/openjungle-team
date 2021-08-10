import React from 'react'
import styled from "styled-components";

const RoadmapItemWrapper = styled.div`
    width: 100%;
`;

const StepTitle = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 24px;
    color: white;
    text-align: right;
    width: 0px;
    transform: rotate(-90deg) translate(-180px, 0);
    white-space: nowrap;

    @media screen and (max-width: 1000px){
        font-size: 16px;
    }
`;

const RoadmapItemTitle = ({ step, stepIndex }) => {
    return (
        <RoadmapItemWrapper>
            <StepTitle>
                {step.title}
            </StepTitle>
        </RoadmapItemWrapper>
    )
}

export default RoadmapItemTitle
