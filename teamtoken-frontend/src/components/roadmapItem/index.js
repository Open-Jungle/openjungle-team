import React from 'react'
import styled from "styled-components";

const ItemConnector = styled.div`
    width: 100%;
    height: 7px;
    background-color: ${({status}) => (status !== "none" ? "#8AC53C" : "rgba(174, 174, 174, 0.41)")};
    box-shadow: ${({status}) => (status !== "none" ? "0 0 7px #fff, 0 0 21px #fff, 0 0 42px #8AC53C, 0 0 82px #8AC53C" : '')};

    @media screen and (max-width: 420px) {
        height: 4px;
    }
`;

const ItemDot = styled.div`
    height: 24px;
    width: 24px;
    min-width: 24px;
    background-color: ${({status}) => (status === "done" ? "#8AC53C" : "rgba(174, 174, 174, 0.41)")};
    box-shadow: ${({status}) => (status === "done" ? "0 0 7px #fff, 0 0 21px #fff, 0 0 42px #8AC53C, 0 0 82px #8AC53C" : '')};
    border-radius: 16px;
    ${({status}) => (status === "active" ? "animation: active 2s linear infinite;" : '')}

    @keyframes active {
        50% {
            box-shadow: 0 0 7px #fff, 0 0 21px #fff, 0 0 42px #8AC53C, 0 0 82px #8AC53C;
            background-color: #8AC53C;
        }
    }

    @media screen and (max-width: 420px) {
        height: 12px;
        width: 12px;
        min-width: 12px;
    }
`;

const RoadmapItemWrapper = styled.div`
    width: ${({stepIndex}) => (stepIndex === 0 ? '' : "100%")};
    display: flex;
    flex-direction: row;
    align-items: center;
`;

const RoadmapItem = ({ step, stepIndex }) => {
    return (
        <RoadmapItemWrapper stepIndex={stepIndex}>
            <ItemConnector status={step.status} />
            <ItemDot status={step.status} />
        </RoadmapItemWrapper>
    )
}

export default RoadmapItem
