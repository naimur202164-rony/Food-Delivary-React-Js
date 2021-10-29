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
        <div className="container my-5 ">
            <h1 className="text-muted text-center"> Login With Your <sapn className="text-info">Google</sapn>  Accounte</h1>
            <img className="img-fluid  mx-auto d-block my-5" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
            <br />
            <button className="btn btn-info mx-auto d-block my-5" onClick={handleSignIn}>Google Sign</button>
        </div>
    );
};

export default Login;