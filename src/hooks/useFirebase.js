import { useEffect, useState } from "react";
import firebaseAuthentication from "../components/Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider} from "firebase/auth";

firebaseAuthentication()

const useFirebase = () =>{
    const [user, setUser] = useState({});
    

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const signInUsingGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () =>{
        signOut(auth)
        .then(()=>{
            setUser({})
        })
    }

    const signInUsingGithub = () =>{
        signInWithPopup(auth, githubProvider)
        .then(result =>{
            setUser(result.user);
        })
    }


    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if(user){
                setUser(user)
            }
        })
    },[]) // eslint-disable-line react-hooks/exhaustive-deps
    
    return{
        user,
        logOut,
        signInUsingGoogle,
        signInUsingGithub
    }


}

export default useFirebase;