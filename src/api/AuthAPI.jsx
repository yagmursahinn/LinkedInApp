import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import {auth} from "../firebaseConfig"



export const LoginAPI = (email, password) => {
    try{

    let reponse = signInWithEmailAndPassword(auth, email, password)
    return response
    }catch(err){
        return err;
    }
}
export const RegisterAPI = (email, password) => {
    try{

    let reponse = signInWithEmailAndPassword(auth, email, password)
    return response
    }catch(err){
        return err;
    }
}