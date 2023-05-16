'use client';
import React from "react";
import styled from "styled-components";

const Card = styled.div`
position:relative;
box-sizing: border-box;
border-radius: 5px;
box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
transition: box-shadow 0.3s ease-in-out;
width:auto;
height: 100%;
padding:50px 30px;
text-align:center;

display: grid;
&:hover {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.103);
}
`;
const Img = styled.img`
width: 100px;
height: 100px;
justify-self: center;
padding: 5px;
`;
const H2 = styled.h2`
padding: 10px 20px;
color: #202020;
font-size:1.2rem;
font-weight:bold;
`;
const Text = styled.p`
color: #606060;
font-size:0.8rem;
`;

const AboutusCard:React.FC<{
    image:string;
    title:string;
    text:string;
}>=({image,title,text})=>{
    return (
    <>
    <Card>
        <Img src={image} alt={title} />
        <H2>{title}</H2>
        <Text>{text}</Text>
    </Card>
    </>
    );
};
export default AboutusCard;