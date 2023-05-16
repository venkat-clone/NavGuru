

"use client";
import Title from "./title";
import ServiceCard from "./servicecard";
import styled from "styled-components";

const CardContainer = styled.div`
display:grid;
margin: 0 10% 5% 10%;
grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
grid-gap:40px;
// background-color:rgba(0,0,1,0.1);
box-sizing: border-box;
`;

const Services = ()=>{
    
    return (
        <>
        <div >
            <Title title="SERVICES" tagLine="Which services do we offer?"/>
            <CardContainer>
            <ServiceCard
             imgSrc='flutter.svg'
             Title='App Development'
             caption ="Have an app idea in mind or want to grow your business in mobile world, we'll help you do it."
             color = '#2db6fa'
             backgroundColor = '#dbf3fe'
            />
            <ServiceCard
             imgSrc='react.svg'
             Title='Web Development'
             caption ="Have an app idea in mind or want to grow your business in mobile world, we'll help you do it."
             color = '#00d8ff'
             backgroundColor = '#00d8ff30'
            />
            <ServiceCard
             imgSrc='UIUX.png'
             Title='UI/UX Desgining'
             caption ="Have an app idea in mind or want to grow your business in mobile world, we'll help you do it."
             color = '#08da4e'
             backgroundColor = '#08da4e30'
            />
            </CardContainer>
        </div>
        </>
    )
}

export default Services;