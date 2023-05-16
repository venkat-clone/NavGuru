'use client';
import React from "react";
import styled from "styled-components";
import Title from "./title";
import AboutusCard from "./aboutusCard";
const Container = styled.div`

`;

const Grid = styled.div`
display:grid;
margin: 0 15% 5% 15%;
grid-template-columns:repeat(auto-fit,minmax(200px,1fr));

grid-gap:50px;
// background-color:rgba(0,0,1,0.1);
box-sizing: border-box;

`;

const Aboutus =()=>{
    return (
        <>
        <Container> 
            <Title 
            title="About us"
            tagLine="We are hear to make success you business"
            />
            <Grid>
                <AboutusCard image="flutter.svg" title="Value for money" text="Have an app idea in mind or want to grow your business in mobile world, we'll help you do it."  />
                <AboutusCard image="flutter.svg" title="Value for money" text="Have an app idea in mind or want to grow your business in mobile world, we'll help you do it."  />
                <AboutusCard image="flutter.svg" title="Value for money" text="Have an app idea in mind or want to grow your business in mobile world, we'll help you do it."  />
            </Grid>
        </Container>
        </>
    );

}
export default Aboutus;