import React from 'react';
import styled from "styled-components";

import TeamTokenSection from '../../sections/teamTokenSection';
import RoadmapSection from '../../sections/roadmapSection';

const MainPageWrapper = styled.div`
    background: linear-gradient(116.82deg, #333333 0%, #000000 50.56%, #303030 100%);
    width: 100%;
    height: 2000px;
    padding-top: 120px;
`;

const JungleexLogo = styled.img`
    position: absolute;
    width: 313px;
    height: 125px;
    left: 0px;
    top: 0px;

    @media screen and (max-width: 768px) {
        width: 156px;
        height: 62px;
    }
`;

const MainPage = () => {
    return (
        <MainPageWrapper>
            <JungleexLogo src={'https://ipfs.io/ipfs/QmSqktoxt6VagJt7azEmxCqKm8C7GbyjWeaREEeFbvvGtz'} alt={'JungleEx'} />
            <TeamTokenSection />
            <RoadmapSection />
        </MainPageWrapper>
    )
}

export default MainPage
