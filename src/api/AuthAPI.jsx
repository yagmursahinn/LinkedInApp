import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
  } from "firebase/auth";
  import { auth } from "../firebaseConfig";



export const LoginAPI = (email, password) => {
    try{

    let reponse = signInWithEmailAndPassword(auth, email, password)
    return response;
    }catch(err){
        return err;
    }
}
export const RegisterAPI = (email, password) => {
    try{

    let reponse = signInWithEmailAndPassword(auth, email, password)
    return response;
    }catch(err){
        return err;
    }
}

export const GoogleSigninAPI = () => {
    try{

    let googleProvider = new GoogleAuthProvider()
    let res = signInWithPopup(auth, googleProvider)
    return res;
    }catch(err){
        return err;
    }
}