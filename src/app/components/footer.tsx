"use client"
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const Footer = styled.footer`
  background-color: #0B0A0A;
  
  display: grid;
  
  color: white;
  padding: 0 3%;
  width: 100vw;

`;
const Divider = styled.div`
  align-self: end;
  display: block;
  background-color: #504848;
  height: 1px;
  margin: 1% 0%;
  width: 100%;
  
`;

const BottomContainer = styled.div`
  align-self: end;
  justify-content: space-between;
  font-size: 0.9rem;
  flex-wrap: wrap;
  display: flex;
  padding: 1%;
  
`;

const TopContainer = styled.div`
  padding: 10px;
  font-size: 0.9rem;
  display: flex;
`;


const LeftDiv = styled.div`
  
  flex: 1;
  display: flex;
  flex-direction: column;
  p{
    display: block;
    margin: 1% 20px;
  }
`;
const RightDiv = styled.div`
  justify-content: space-evenly;
  display: flex;
  flex: 1.7;
  align-items: flex-start;
  margin: 1%;
  h1{
    padding: 10px;
    font-weight: bold;
    
  }
`;

const TitleDiv = styled.div`
  display: flex;
  align-items: center;
  margin: 1%;
  h1{
    padding: 10px;
    font-size: 1.2rem;
    font-weight: bold;
  }
  
`;

const ContactIcon = styled.img`
  width: 30px;
  height: 30px;
  background-color: #969696;
  margin: 2px 5px;
`;
const ContactIconContainer = styled.div`
  display: flex;
  grid-gap: 10px;
  margin: 1% 20px;
 
`;

const RightContainer = styled.div`
  
  width: max-content;
  
  ul li h1{
    display: contents;
    
  }
  ul{
    margin: 5px 10px;
  }
  ul li{
    margin: 3px;
  }
  h1{
    display: contents;
    align-items: center;
  }
`;

const FooterBar = ()=>{
    return (<>
        <Footer>
            <TopContainer>
                <LeftDiv>
                    <TitleDiv>

                        <div style={{
                            width:'40px',
                            height:'40px',
                            background:'gray',

                        }}>

                        </div>
                        <h1>Title</h1>
                    </TitleDiv>
                    <p>lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem</p>
                    <ContactIconContainer>
                        <ContactIcon src={''} alt='Instagram'/>
                        <ContactIcon src={''} alt='Instagram'/>
                    </ContactIconContainer>
                </LeftDiv>
                <RightDiv>
                    <RightContainer>
                        <h1>Useful Links</h1>
                        <ul>
                            <li><Link  href=''>Home</Link></li>
                            <li><Link href=''>About Us</Link></li>
                            <li><Link href=''>Contact Us</Link></li>
                        </ul>
                    </RightContainer>
                    <RightContainer>
                        <h1>Our Services</h1>
                        <ul>
                            <li>App Development</li>
                            <li>Web Development</li>
                            <li>UI/UX Design</li>
                        </ul>
                    </RightContainer>
                    <RightContainer>
                        <h1>Contact Us</h1>
                        <ul>
                            <li><h1>Email:</h1><Link href=''>example@email.com</Link></li>
                            <li><h1>Phone:</h1> <Link href=''>+8184926683</Link></li>
                        </ul>
                    </RightContainer>
                </RightDiv>
            </TopContainer>

            <BottomContainer>
                <Divider/>
                <div>@2023 brand name | All rights reserved.</div>
                <div>Privacy & policy</div>
            </BottomContainer>
        </Footer>
    </>)
};

export default FooterBar;