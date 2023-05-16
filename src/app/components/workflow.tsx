"use client";
import React from "react";
import Title from "./title";
import styled from "styled-components";
import WorkFlowCard from "./workflowCard";

const Container = styled.div`

`;

const MainContainer = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Ul = styled.ul`

`;

const Li = styled.li`
position: relative;
list-style-type: none;
width: 6px;
background-color: #142A34;
margin: 0 auto;
padding-top: 50px;
list-style-type: none;
::after ::before{
    box-sizing: border-box;
}
::after{
    background: #142A34;
    content: '';
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
}

`;

const WorkFlow =()=>{
    return (
        <>
            <MainContainer>


        <Title title={"Workflow"} tagLine={"How we create your product?"}  />
        <Container>
            <Ul>
                <Li>
                <WorkFlowCard 
                main={'Ideation'}
                text={'We begin with an in-detailed meeting with the client to get all the information about the idea, tech feasibility, approximate timeline and budget.'}
                isLeft={false}
                />
                </Li>
                <Li>
                <WorkFlowCard 
                isLeft={true}
                main={'Ideation'}
                text={'We begin with an in-detailed meeting with the client to get all the information about the idea, tech feasibility, approximate timeline and budget.'}

                />
                </Li>
                <Li>
                <WorkFlowCard 
                main={'Ideation'}
                text={'We begin with an in-detailed meeting with the client to get all the information about the idea, tech feasibility, approximate timeline and budget.'}
                isLeft={false}
                />
                </Li>
                <Li>
                <WorkFlowCard 
                isLeft={true}
                main={'Ideation'}
                text={'We begin with an in-detailed meeting with the client to get all the information about the idea, tech feasibility, approximate timeline and budget.'}

                />
                </Li>
                
            </Ul>
        </Container>
            </MainContainer>
        </>
    );
};

export default WorkFlow;
