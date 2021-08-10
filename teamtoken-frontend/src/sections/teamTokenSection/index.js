import React from 'react';
import styled from "styled-components";
import { NeonTitle } from '../../components/sharedComponents';
import TeamMember from '../../components/teamMember';

const TokenSectionWrapper = styled.div`
    background: rgba(188, 188, 188, 0.19);
    box-shadow: 8px 8px 4px rgba(0, 0, 0, 0.25);
    border-radius: 52px;
    width: 90%;
    margin: auto;
    margin-top: 60px;
    min-height: 300px;
    padding-top: 24px;
    padding-bottom: 60px;
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

const TeamTokenSection = () => {

    const team = [
        {
            "name": "FCote (Nakamoth)",
            "img": 'https://ipfs.io/ipfs/QmQGdSZVdgNTi6UFkbJQor8uL4vfmokjhAiN1Uj87bN2D1',
            "balance": 99,
            "from": "Canada",
            "role": "Founder of the project",
            "socialProfile": "https://github.com/FredCoteMtl",
            "socialProfileTag": "github",
            "id": 1
        },
        {
            "name": "Carlos",
            "img": 'https://ipfs.io/ipfs/QmeYfDWC6X1LAHJVYuc8f5srV7ZJKC6hUMmbtrJqMHuZKH',
            "balance": 1,
            "from": "Canada",
            "role": "Head of marketing",
            "socialProfile": "@Carlo_Santana",
            "socialProfileTag": "@Carlos_Santana",
            "id": 2
        },
    ]

    return (
        <>
            <NeonTitle>JUNGLE TEAM TOKEN</NeonTitle>
            <TokenSectionWrapper>
                <Subtitle>TEAM MEMBERS</Subtitle>
                {team.map(member => <TeamMember memberData={member} />)}
            </TokenSectionWrapper>
        </>
    )
}

export default TeamTokenSection
