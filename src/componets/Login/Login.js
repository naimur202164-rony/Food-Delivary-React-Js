import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useFirebase from './../../hooks/useFirebase';

const Login = () => {
    const history = useHistory()
    const location = useLocation()
    const url = location.state?.from || "/home"

    const { SignInWithGoogle, setUser, setIsLoading, user } = useFirebase()
    const handleSignIn = () => {
        SignInWithGoogle()
            .then((res) => {
                setIsLoading(true)
                setUser(res.user)
                history.push(url)
                console.log(res.user)
            }
            )
            .catch((err) => console.log(err))
            .finally(() => {
                setIsLoading(false)
            })
    }
    return (
        <div>
            <h2>This is Login</h2>
            <button onClick={handleSignIn}>Google Sign</button>
        </div>
    );
};

export default Login;