'use client';
import React from "react";
import styled from "styled-components";


const Header = styled.div`
margin-top: 40px;
`;

const Title = styled.h2`
color: #B6B6B6;

`;

const TagLine = styled.p`
color: #202020;
font-size: 2rem;
font-weight: bold;
margin: 1% 2% 0 2%;
`;

const MainContainer = styled.div`
// width: 100%;
margin: 0 10%;
`;

const FieldContainer = styled.form`
display:inline-block;
width: 100%;
justify-content:start;
margin-top:1%;
// background-color:red;
// height: 100%;
`;
const Container = styled.div`
// height: 70%;
// width: 100%;
// background-color:blue;
justify-content: space-evenly;
display: flex;
// align-items: center;
`;
const Img = styled.img`

// aspect-ratio:1;
display:inline-block;
// background-color:blue;
`;

const TextInput = styled.div`
margin: 10px 0;
`;

const Label = styled.label`
display:block;
padding:2px;
font-size:0.7rem;
font-weight:bold;
color: #808080;
`;
const Input = styled.input`
border: 2px solid #202020;
border-radius:6px;
padding:4px;
color: #202020;
font-weight:regular;
font-size:0.9rem;
text-transform:capitalize;
margin: 0px 10px;
width: 60%;
`;
const Textarea = styled.textarea`
border: 2px solid #202020;
border-radius:6px;
padding:4px;
color: #202020;
font-weight:regular;
font-size:0.9rem;
text-transform:capitalize;
margin: 0px 10px;
width: 60%;
`;


const ContactUs =()=>{
    return (
        <>
        <MainContainer>
            <Header>
                <Title>Contact us</Title>
                <TagLine> Let's Discuss your work</TagLine>
            </Header>
            <Container>
                <FieldContainer>
                    <TextInput>
                        <Label id="name">Your Name*</Label>
                        <Input type="text" id="name" placeholder="enter your name" required={true}/>
                    </TextInput>
                    <TextInput>
                        <Label id="email">Email Name*</Label>
                        <Input type="text" id="email" placeholder="enter your email" required={true}/>
                    </TextInput>
                    <TextInput>
                        <Label id="phone">Phone Number</Label>
                        <Input type="text" id="phone" placeholder="enter your phone number"/>
                    </TextInput>
                    <TextInput>
                        <Label id="aboutprject">What service you are Locking for*</Label>
                        <Textarea id="aboutprject" placeholder="discribe your project" required={true} maxLength={1000} />
                    </TextInput>
                    <TextInput>
                        <Input type="submit" value="Send" style={{
                            backgroundColor:'green',
                            color:'white',
                            fontWeight:'bold',
                            padding:'10px 30px',
                            border:'none',
                        }}/>
                    </TextInput>

                </FieldContainer>
                <Img 
                width={600}
                src="countact_us_illistraction.svg"/>
            </Container>

        </MainContainer>
        </>
    )
};

export default ContactUs;

