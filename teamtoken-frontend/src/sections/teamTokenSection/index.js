import React from 'react';
import styled from "styled-components";
import { NeonTitle } from '../../components/sharedComponents';
import TeamMember from '../../components/teamMember';
import linkIcon from '../../icons/External_link.svg';

const Wrap = styled.div`
    width: 100%;
    padding-top: 180px;
    @media screen and (max-width: 768px) {
        padding-top: 90px;
    }
`;

const TokenSectionWrapper = styled.div`
    background: rgba(188, 188, 188, 0.19);
    box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.25);
    border-radius: 52px;
    width: 90%;
    margin: auto;
    margin-top: 90px;
    padding-top: 24px;
    padding-bottom: 15px;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const Subtitle = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    width: 100%;
    text-align: center;
    color: #707070;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`;

const TokenSectionFooter = styled.div`
    width: 90%;
    margin: auto;
    text-align: center;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    color: #A7A7A7;
    margin-top: 20px;
    border-top: solid 2px rgba(255, 255, 255, 0.12);
    padding-top: 5px;

    @media screen and (max-width: 768px) {
        font-size: 10px;
        line-height: 12px;
    }
`;

const Link = styled.a`
    color: #8AC53C;
    text-decoration: none;
`;

const InlineIcon = styled.img`
    color: #8AC53C;
    height: 8px;
    padding-left: 2px;
`;

const TeamTokenSection = ({ data }) => {
    return (
        <Wrap>
            <NeonTitle>JUNGLE TEAM TOKEN</NeonTitle>
            <TokenSectionWrapper>
                <Subtitle>TOKEN HOLDERS</Subtitle>
                {data.map(member => <TeamMember memberData={member} key={Math.random()}/>)}
                <TokenSectionFooter>
                    The team token represents contributions to the project. There are only 100 team token in total, euqivalent to 100% of the team. Once the governance tokens of the JungleEx platforms goes live, team token will be tradable for gov tokens, in proportion to ones contribution. To join the team, see our{' '}
                    <Link href={'https://discord.gg/9wuRTJYvNv'} target={'_blank'}>
                        discord page
                        <InlineIcon src={linkIcon} alt={''}/>
                    </Link>
                    . For more precise information about the team token and members profiles, you can find the token on bsc scan.
                </TokenSectionFooter>
            </TokenSectionWrapper>
        </Wrap>
    )
}

export default TeamTokenSection
