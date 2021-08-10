import React from 'react';
import styled from "styled-components";
import { NeonTitle } from '../../components/sharedComponents';
import RoadmapItem from '../../components/roadmapItem';
import RoadmapItemTitle from '../../components/roadmapItemTitle';

const SectionWrapper = styled.div`
    width: 100%;
    margin-top: 120px;
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

const RoadmapSection = () => {

    const roadmap = [
        {"title": "team building", "status": "done"},
        {"title": "specifications", "status": "done"},
        {"title": "developement", "status": "active"},
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
                {roadmap.map(step => <RoadmapItemTitle step={step} />)}
            </RoadmapTitleWrapper>
            <RoadmapItemWrapper>
                {roadmap.map(step => <RoadmapItem step={step} stepIndex={roadmap.indexOf(step)} />)}
            </RoadmapItemWrapper>
        </SectionWrapper>
    )
}

export default RoadmapSection
