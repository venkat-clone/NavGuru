"use client";
import React from "react";
import styled from "styled-components";

const Card = styled.div`
position: relative;
width: 400px;
padding: 15px;
border-radius: 10px;
bottom: 0;
background: rgba(203, 203, 208, 0.28);
transform: none;
visibility: visible;
opacity: 1;
transition: box-shadow 0.3s ease-in-out;
  
 

&:hover{
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}
  
  

`;

const Title = styled.time`
font-weight: bold;
font-size: 18px;
display: block;
margin-bottom: 10px;
`;

const P = styled.p`
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0;
margin-inline-end: 0;`;

const WorkFlowCard:React.FC<{
    main:String;
    text:String;
    isLeft:boolean;
}> =({main,text,isLeft})=>{
    return (
        <>
        <Card style={{
            left: isLeft?'-445px':'45px'
        }}>
            <Title>{main}</Title>
            <P>{text}</P>
        </Card>
        
        </>
    );
};
export default WorkFlowCard;