import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import { ethers } from 'ethers';
import IPFS from 'ipfs-core';

import TeamTokenSection from '../../sections/teamTokenSection';
import RoadmapSection from '../../sections/roadmapSection';
import Loading from '../../components/loading';

const MainPageWrapper = styled.div`
    background: linear-gradient(116.82deg, #333333 0%, #000000 50.56%, #303030 100%);
    width: 100%;
    height: 100%;
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
    
    const [data, setData] = useState(undefined);

    useEffect(() => {
        async function fetchData() {
            const toBuffer = require('it-to-buffer');
            let TeamToken = new ethers.Contract(
                "0x4115740891eb3Bd1F134402E6F899E401b2292b0",
                ['function balanceOf(address account) external view returns (uint256)',
                'function getIpfsLocation() external view returns (bytes32)'],
                new ethers.providers.JsonRpcProvider('https://data-seed-prebsc-1-s1.binance.org:8545/')
            );
            
            let ipfsLocation = await TeamToken.getIpfsLocation();
            ipfsLocation = ethers.utils.base58.encode("0x1220" + ipfsLocation.substring(2));
            const ipfs = await IPFS.create();
            let bufferedContents = await toBuffer(ipfs.cat(ipfsLocation));
            let jsonData = JSON.parse((new TextDecoder().decode(bufferedContents)));
            ipfs.stop();

            let listData = [];
            for(let dev in jsonData) {
                let bal = await TeamToken.balanceOf(jsonData[dev].address);
                jsonData[dev]['balance'] = parseInt(bal.toString()) / (10 ** 18);
                jsonData[dev]['id'] = dev;
                listData.push(jsonData[dev]);
            }
            setData(listData);
        }
        fetchData();
    }, [])

    return (
        <MainPageWrapper>
            <JungleexLogo src={'https://ipfs.io/ipfs/QmSqktoxt6VagJt7azEmxCqKm8C7GbyjWeaREEeFbvvGtz'} alt={'JungleEx'} />
            {data === undefined ? 
                <Loading/>:
                <>
                    <TeamTokenSection data={data} />
                    <RoadmapSection />
                </>
            }
            
        </MainPageWrapper>
    )
}

export default MainPage
