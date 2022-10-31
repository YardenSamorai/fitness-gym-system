import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import BG_photo from '../assets/BG_photo.jpg'
import { createSearchParams, Link, useNavigate } from "react-router-dom";
import firebase from "firebase/compat/app";
import auth from "firebase/compat/app";


const SignUp = () => {
    const [signUpPhone, setSignUpPhone] = useState();
    const [name, setName] = useState("");
    const [weight, setWeight] = useState("");
    const [age, setAge] = useState();

    const db = firebase.firestore();
    let navigate = useNavigate();
    firebase.auth().useDeviceLanguage();

  const bla=()=>{
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
            'size': 'invisible',
            'callback': (response) => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
             //   onSignInSubmit();
            }
        });
    }


    const onChangeInput = (e) => {
        switch (e.target.id) {
            case "name":
                setName(e.target.value);
                break
            case "phonenumber":
                setSignUpPhone(e.target.value);
                break;
            case "weight":
                setWeight(e.target.value);
                break;
            case "age":
                setAge(e.target.value);
            default:
                break;
        }
    }

    const onClickHandler = () => {

       

        if (signUpPhone ===10) {
            bla();
            navigate(`/`);
            alert("enter your phone number again to log in")
            AddDoc();
        } else {
            alert("please enter a valid phone number");
        }
    }

    const AddDoc = (e) => {
        db.collection("Users").doc(signUpPhone).set({
            name: name,
            age: age,
            phone: signUpPhone,
            weight: weight
        })
            .then(() => {
                console.log("Document successfully written!");
            })
            .catch((error) => {
                console.error("Error writing document: ", error);
            });

    };

    return (
        <Body>
            <MainContainer>
                <WelcomeText>
                    <SignUptext>
                        Sign Up
                    </SignUptext>
                    FITNESS CLUB<Spandot>.</Spandot>
                    <WelcomeTexth2>NO PAIN..NO GAIN</WelcomeTexth2>
                </WelcomeText>
                <LoginInput>
                    enter your details for sign up
                </LoginInput>
                <InputContainer>
                    <StyledInput id="phonenumber" type="number" placeholder='Phone number' onChange={onChangeInput}></StyledInput>
                    <StyledInput id="name" type="text" placeholder='name' onChange={onChangeInput}></StyledInput>
                    <StyledInput id="weight" type="number" placeholder='weight' onChange={onChangeInput}></StyledInput>
                    <StyledInput id="age" type="number" placeholder='age' onChange={onChangeInput}></StyledInput>
                    <ButtonContainer>
                        <StyledButton id="sign-in-button" onClick={onClickHandler}>Sign up</StyledButton>
                        <AlredySignUp href="/">alredy have account?</AlredySignUp>
                    </ButtonContainer>

                </InputContainer>

            </MainContainer>
        </Body>
    )
}

const AlredySignUp = styled.a`
color:white;
font-size: 0.8rem;
text-decoration: none;
margin:20px
`;

const LoginInput = styled.div`
display: flex;
flex-direction: column;
font-size: 1.2em;
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
height: 2rem;
padding: 1rem;
border: none;
outline: none;
color:white;
font-size:1rem;
font-weight:bold;
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
`;

const InputContainer = styled.div`
display:flex;
flex-direction: column;
justify-content:space-around;
align-items:center;
height: 50%;
width: 70%;
margin-bottom: .2em;
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
align-items: center;
justify-content: center;
height: 40%;
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

const LinksContainer = styled.div`
width:99%;
height: 1px;
display:flex;
justify-content: center;
`;

const LinkBtn = styled.a`
color: white;
text-decoration: none;
padding: 25px;
font-weight: 700;
&:focus {
color:#711314;
}
`;

const SignUptext = styled.div`
color:white;
font-family: 'Raleway', sans-serif;
font-size: 1rem;
margin-bottom: 1rem;
color:#711314;
`;

export default SignUp