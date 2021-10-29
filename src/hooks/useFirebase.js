import React, { useEffect, useState } from 'react';
import inittiazeAuthintication from './../componets/firebase/firebase.ini';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";

inittiazeAuthintication()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const GoogleProvidder = new GoogleAuthProvider();
    const auth = getAuth();
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);
            if (user) {

                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        })
        return () => unsubscribe()
    }, [])
    const SignInWithGoogle = () => {
        return signInWithPopup(auth, GoogleProvidder)
    }
    const Logout = () => {
        console.log("logouttttt");
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }

    return {
        SignInWithGoogle, setUser, Logout, user, isLoading, setIsLoading


    }



        ;
};

export default useFirebase;