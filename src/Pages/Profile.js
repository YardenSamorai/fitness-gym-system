import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import firebase from '../API/FireStore';
import styled from 'styled-components';
import HeroBanner from '../Components/HeroBanner';
import SearchExercises from '../Components/SearchExercises';
import Exercises from '../Components/Exercises';


const Profile = () => {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState ([]);
  const [data, setData] = useState({});
  let { id } = useParams();
  const docRef = firebase.firestore().collection("Users");


  const getUserInfo = () => {
    docRef.doc(id).get().then((doc) => {
      if (doc.exists) {
        setData(doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch((error) => {
      console.log("Error getting document:", error);
    });
  }
  
useEffect(() => {
  getUserInfo()
}, []);


  return (
    <AppDiv>
      <HeroBanner />
      <SearchExercises setExercises = {setExercises} bodyPart = {bodyPart} setBodyPart={setBodyPart}/>
      <Exercises setExercises = {setExercises} bodyPart = {bodyPart} exercises={exercises} />
    </AppDiv>
  )
}
const AppDiv = styled.div`

`;
export default Profile