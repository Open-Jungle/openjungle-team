import React from 'react';
import styled from "styled-components";

const LoadingWrapper = styled.div`
    height: 100vh;
    width: 100%;
    padding-top: 30vh;
`;

export const NeonTitle = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 144px;
    line-height: 84px;
    width: 100%;
    text-align: center;
    color: #fff;
    text-shadow:
        0 0 7px #fff,
        0 0 10px #fff,
        0 0 21px #fff,
        0 0 42px #8AC53C,
        0 0 82px #8AC53C,
        0 0 92px #8AC53C,
        0 0 102px #8AC53C,
        0 0 151px #8AC53C;
    animation: flicker 3s linear infinite 1s;

    @media screen and (max-width: 768px) {
        font-size: 72px;
    }

    @media screen and (max-width: 420px) {
        font-size: 48px;
    }

    @keyframes flicker {
        50% {
            color: #8AC53C;
        }
    }
`;

const NeonReflect = styled.div`
    position: absolute:
    width: 100%;
    height: 25vh;
    margin: auto;
    transform: translateY(-50px);
    background: 
        radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.2) 0%, rgba(138, 197, 60, 0) 100%), 
        radial-gradient(35.42% 35.42% at 50% 50%, rgba(138, 197, 60, 0.25) 0%, rgba(138, 197, 60, 0) 100%), 
        radial-gradient(24.31% 24.31% at 50% 50%, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%), 
        radial-gradient(51.79% 39.35% at 50% 50%, rgba(255, 255, 255, 0.25) 0%, rgba(254, 255, 253, 0) 31.77%);
`;

const Loading = ({ status }) => {
    return (
        <LoadingWrapper>
            <NeonTitle>LOADING</NeonTitle>
            <NeonReflect />
        </LoadingWrapper>
    )
}

export default Loading
