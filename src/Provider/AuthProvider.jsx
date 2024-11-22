import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null)

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const logOut = () =>{
        return signOut(auth)
    }

    const logIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unSubscribed = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log('user loggedin', currentUser);
        })
        return ()=>{
            unSubscribed();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        logOut,
        logIn
    }

    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;