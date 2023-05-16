"use client";
import React from "react"
import styles from "../styles/servicecard.module.css"

import styled from 'styled-components';



const ServiceCard:React.FC<{
    imgSrc: string;
    Title:string;
    caption:string;
    color:string;
    backgroundColor:string;
}> =({imgSrc,Title,caption,color,backgroundColor})=>{
    const CardContainer = styled.div`
    position:relative;
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    transition: box-shadow 0.3s ease-in-out;
    width:auto;
    height: 100%;
    padding:50px 30px;
    text-align:center;
    border-bottom: 3px solid ${color};
    --hover-color:${backgroundColor};
      
    &:hover {
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.4);
      background-color: ${color};
       box-sizing: border-box;
      color: white;
      --hover-color:white;
      --hover-color-caption:white;
    }


  `;
  
  const CardImage = styled.img`
  width: 36px;
  height: 36px;
  `;
  
  const CardText = styled.div`
    padding: 1rem;
  `;

  const ImageContainer = styled.div`
  padding: 20px 20px;
  align-self: center;
  justify-self: center;
  font-size: 36px;
  border-radius: 2px;
  background-color: var(--hover-color);
  
  
  `;
      
    return (
        <CardContainer>
            <div style={{
                 alignItems: 'end',
                 display: 'grid',
                 height: '-webkit-fill-available',
            }}>
                <ImageContainer>
            <CardImage src={imgSrc} alt={Title} 
            width='100px'
            height='100px'
            color="white"
            
            />
            </ImageContainer>
            <CardText>
                <h2 style={{
                    fontSize:'1.6rem',
                    fontWeight:'bolder',
                    padding:'10px'
                    
                }}>{Title}</h2>
                <p style={{
                    color:'var(--hover-color-caption)',
                    fontSize:'0.8rem',
                }}>{caption}</p>
            </CardText>
            </div>
           
        </CardContainer>
    );
}


export default ServiceCard;