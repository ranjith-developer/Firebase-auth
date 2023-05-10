import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase";

const userAuthContext = createContext()

export function UserAuthContextProvider({children}) {
    const [user, setUser] = useState('')

    function signup(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logout() {
        return signOut(auth)
    }
    function googleSignin() {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return () => unsubscribe()
    }, [])

    return <userAuthContext.Provider value={{user, signup, login, logout, googleSignin}}>{children}</userAuthContext.Provider> 
}

export function useUserAuth() {
    return useContext(userAuthContext)
}