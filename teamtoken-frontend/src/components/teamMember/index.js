import React from 'react'
import styled from "styled-components";

const TeamMemberWrapper = styled.div`
    width: 100%;
    height: 115px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    @media screen and (max-width: 768px) {
        height: 57px;
    }
`;

const MemberPic = styled.img`
    border: 1px solid #8AC53C;
    border-radius: 50%;
    width: 85px;
    height: 85px;
    box-sizing: border-box;

    @media screen and (max-width: 1000px) {
        width: 60px;
        height: 60px;
    }

    @media screen and (max-width: 768px) {
        width: 45px;
        height: 45px;
    }
`;

const MemberPicWrapper = styled.div`
    width: 10%;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 20%;
    }
`;

const HoldBar = styled.div`
    height: 74px;
    border: 5px solid #8AC53C;
    border-radius: 37px;
    width: 50%;
    box-sizing: border-box;

    @media screen and (max-width: 768px) {
        height: 36px;
        border: 3px solid #8AC53C;
        border-radius: 18px;
    }
`;

const HoldBarProgress = styled.div`
    box-shadow: 
        0 0 7px #fff, 
        0 0 21px #fff, 
        0 0 42px #8AC53C, 
        0 0 82px #8AC53C;
    border-radius: 37px;
    background-size: 56.57px 56.57px;
    height: 100%;
    width: ${({balance}) => (balance+"%")};
    min-width: 74px;
    background-image: linear-gradient(45deg, #3b5ec4 25%, #8ac53c 25%, #8ac53c 50%, #3b5ec4 50%, #3b5ec4 75%, #8ac53c 75%, #8ac53c 100%);
    
    animation: slide 10s linear infinite;
    
    @media screen and (max-width: 768px) {
        border-radius: 18px;
        min-width: 36px;
    }
    
    @keyframes slide {
        50% {
            box-shadow: 
                0 0 7px #fff, 
                0 0 42px #8AC53C;
        }
    }
`;

const PercentIndicator = styled.div`
    font-family: Roboto;
    font-style: normal;
    font-weight: 200;
    font-size: 64px;
    color: #3B5EC4;
    width: 20%;
    padding-left: 15px;

    @media screen and (max-width: 1000px) {
        font-size: 48px;
        padding-left: 10px;
    }

    @media screen and (max-width: 768px) {
        font-size: 32px;
        padding-left: 5px;
    }

    @media screen and (max-width: 420px) {
        font-size: 24px;
    }
`;

const InfoBox = styled.div`
    font-family: Roboto;
    font-style: normal;
    width: 25%;
    padding: 0 5px;
    padding-right: 15px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

const InfoBoxRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const InfoRowTitle = styled.div`
    font-weight: bold;
    font-size: 13px;
    line-height: 15px;
    color: #707070;

    @media screen and (max-width: 768px) {
        font-size: 10px;
        line-height: 12px;
    }
`;

const InfoRowData = styled.div`
    font-weight: normal;
    font-size: 13px;
    line-height: 15px;
    color: #D3D3D3;

    @media screen and (max-width: 768px) {
        font-size: 10px;
        line-height: 12px;
    }
`;

const TeamMember = ({ memberData }) => {
    console.log(memberData.name);
    return (
        <TeamMemberWrapper>
            <MemberPicWrapper>
                <MemberPic src={memberData.img} alt={memberData.name} />
            </MemberPicWrapper>

            <HoldBar>
                <HoldBarProgress balance={memberData.balance}/>
            </HoldBar>
            <PercentIndicator>
                {memberData["balance"]+"%"}
            </PercentIndicator>
                
            <InfoBox>
                <InfoBoxRow>
                    <InfoRowTitle>Name:</InfoRowTitle>
                    <InfoRowData>{memberData.name}</InfoRowData>
                </InfoBoxRow>
                <InfoBoxRow>
                    <InfoRowTitle>From:</InfoRowTitle>
                    <InfoRowData>{memberData.from}</InfoRowData>
                </InfoBoxRow>
                <InfoBoxRow>
                    <InfoRowTitle>Role:</InfoRowTitle>
                    <InfoRowData>{memberData.role}</InfoRowData>
                </InfoBoxRow>
                <InfoBoxRow>
                    <InfoRowTitle>Social Profile:</InfoRowTitle>
                    <InfoRowData>
                        <a 
                            href={memberData.socialProfile}
                            target={"_blank"}
                            rel={'noreferrer'}
                            style={{"textDecoration":"none", "color": "#D3D3D3"}}
                        >
                            {memberData.socialProfileTag}
                        </a>
                    </InfoRowData>
                </InfoBoxRow>
                <InfoBoxRow>
                    <InfoRowTitle>ID:</InfoRowTitle>
                    <InfoRowData>{memberData.id}</InfoRowData>
                </InfoBoxRow>
            </InfoBox>
        </TeamMemberWrapper>
    )
}

export default TeamMember
