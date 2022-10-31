import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BG_photo from '../assets/BG_photo.jpg'
import firebase from '../API/FireStore';
import { createSearchParams, useNavigate } from "react-router-dom";
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from '../API/FireStore';



const LoginForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const [input, setInput] = useState('');
    let navigate = useNavigate();
    const db = firebase.firestore();

    const onChangeInput = (e) => {
        setInput(e.target.value);
    }

    const onClickHandler = () => {
        setPhoneNumber(input);
        getUser(input);
    }

    const docRef = db.collection("Users");


    const getUser = (phone) => {

        let appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, phoneNumber,appVerifier)
        .then(confirmatinResult => {
            let confirmationResult = confirmationResult;
        }).catch((error) => {
            console.log(error);
        })
        docRef.doc(phone).get().then((doc) => {
            if (doc.exists) {
                const data = { ...doc.data() }
                navigate(`/profile/${phone}`);

            } else {
                alert("There is no user that register with this phone number, please try again");
                // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }).catch((error) => {
            console.log("Error getting document:", error);
        });
    }



    return (
        <Body>
            <MainContainer>
                <WelcomeText>
                    FITNESS CLUB<Spandot>.</Spandot>
                    <WelcomeTexth2>NO PAIN..NO GAIN</WelcomeTexth2>
                </WelcomeText>
                <LoginInput>
                    please enter your phone number
                </LoginInput>
                <InputContainer>
                    <StyledInput type="number" placeholder='Phone number' onChange={onChangeInput}></StyledInput>
                    <ButtonContainer>
                        <StyledButton onClick={onClickHandler}>Sign in</StyledButton>
                        <SignUpLink href = "/SignUp">Sign up</SignUpLink>
                    </ButtonContainer>
                </InputContainer>
            </MainContainer>
        </Body>
    )
}

const SignUpLink = styled.a`

color:#711314;
font-weight: 600;
text-decoration: none;
font-family: 'Raleway', sans-serif;
margin:20px
`;

const LoginInput = styled.div`
display: flex;
flex-direction: column;
font-size: 1.5em;
width: 100%;
text-align: center;
color:white;
`;

const WelcomeText = styled.h2`
margin: 20rem 0 2rem 0;
color:white;
font-size: 3rem;
letter-spacing: 0.8rem;
text-align: center;
`

const Body = styled.div`
    font-family: 'Raleway', sans-serif;
    background-image: url(${BG_photo});
    background-size: cover;
    height: 100vh;
    width: 100vw;
`;

const StyledInput = styled.input`
background: rgba(255, 255, 255, 0.15);
box-shadow: 0 0px 5px 0 white;
border-radius: 2rem;
width: 80%;
height: 3rem;
padding: 1rem;
border: none;
outline: none;
color:white;
font-size:1rem;
font-weight:bold;
margin-top: 0px;
&:focus {
    display: inline-block;
    box-shadow: 0 2px 10px 0 #711314;
    backdrop-filter: blur(12rem);

}
&::placeholder {
    color: white;
    font-weight: 100;
    font-size: 1rem;
}
`;

const Input = styled.input`
width:150px;
margin-top: 20px;
`;

const InputContainer = styled.div`
display:flex;
flex-direction: column;
justify-content:space-around;
align-items:center;
height: 50%;
width: 70%;
`;

const MainContainer = styled.div`

display:flex;
align-items: center;
flex-direction: column;
height: 99vh;
width: 35vw;
font-family: 'Raleway', sans-serif;
background-image: url("/src/assets/BG-photo.jpg");
background-size: cover;
`;

const ButtonContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
text-align: center;
align-items:center;
justify-content: center;
height: 50%;
`;

const StyledButton = styled.button`
background: linear-gradient(to right, #14163c 0%, #03217b, 79%);
text-transform: uppercase;
letter-spacing:0.1rem;
width: 65%;
height: 3rem;
border: none;
color: black;
border-radius: 1.5rem;
cursor: pointer;
`;

const WelcomeTexth2 = styled.div`
text-align:center;
font-size: 1.8rem;
`;

const Spandot = styled.span`
color: #711314;
`;

export default LoginForm