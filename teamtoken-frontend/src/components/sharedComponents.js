import styled from "styled-components";

export const NeonTitle = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 72px;
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

    @media screen and (max-width: 768px) {
        font-size: 36px;
    }

    @media screen and (max-width: 420px) {
        font-size: 24px;
    }
`;