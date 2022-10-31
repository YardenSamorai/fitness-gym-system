import firebase from "firebase/compat/app";

export const api_Users = firebase.firestore().collection('Users');