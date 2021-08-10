import React from 'react';
import styled from "styled-components";
import { NeonTitle } from '../../components/sharedComponents';
import RoadmapItem from '../../components/roadmapItem';
import RoadmapItemTitle from '../../components/roadmapItemTitle';

const SectionWrapper = styled.div`
    width: 100%;
    margin-top: 120px;
    padding-bottom: 300px;
`;

const RoadmapItemWrapper = styled.div`
    width: 85%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 180px;

`;

const RoadmapTitleWrapper = styled.div`
    width: 92.5%;
    margin: auto;
    padding-left: 7.5%;
    display: flex;
    flex-direction: row;
`;

const DescriptionTitle = styled.div`
    width: 85%;
    margin: auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    color: #6F6D6D;
    margin-top: 100px;

    @media screen and (max-width: 768px) {
        margin-top: 50px;
        font-size: 18px;
        line-height: 21px;
    }
`;

const Description = styled.div`
    width: 85%;
    margin: auto;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    text-align: justify;
    color: #CFCFCF;
    @media screen and (max-width: 768px) {
        font-size: 12px;
        line-height: 14px;
    }
`;

const RoadmapSection = () => {

    const roadmap = [
        {"title": "specifications", "status": "done"},
        {"title": "team building", "status": "active"},
        {"title": "developement", "status": "none"},
        {"title": "alpha release", "status": "none"},
        {"title": "pre-launch", "status": "none"},
        {"title": "private sale", "status": "none"},
        {"title": "public presale", "status": "none"},
        {"title": "full release", "status": "none"},
        {"title": "governance upgrade", "status": "none"},
        {"title": "ownership renouncement", "status": "none"},
    ]

    return (
        <SectionWrapper>
            <NeonTitle>JUNGLEEX ROADMAP</NeonTitle>
            <RoadmapTitleWrapper>
                {roadmap.map(step => <RoadmapItemTitle step={step} key={Math.random()} />)}
            </RoadmapTitleWrapper>
            <RoadmapItemWrapper>
                {roadmap.map(step => <RoadmapItem step={step} stepIndex={roadmap.indexOf(step)} key={Math.random()} />)}
            </RoadmapItemWrapper>
            <DescriptionTitle>TEAM BUILDING:</DescriptionTitle>
            <Description>
                In this step of the project we are looking to find like minded people who want to join our team. 
            </Description>
        </SectionWrapper>
    )
}

export default RoadmapSection
