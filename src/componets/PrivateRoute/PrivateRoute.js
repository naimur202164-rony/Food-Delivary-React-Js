import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// import useAuth from './../Hooks/useAuth';
import useFirebase from './../../hooks/useFirebase';




const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useFirebase()

    if (isLoading) {
        return "loading"
    }

    return (
        <div>

            <Route
                {...rest}

                render={({ location }) => user.email ? children : <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: location }
                    }}
                ></Redirect>}
            >

            </Route>

        </div>
    );
};

export default PrivateRoute;