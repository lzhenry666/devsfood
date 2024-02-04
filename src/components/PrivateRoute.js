import React from "react";
import { Route, Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children, ...rest }) => {
    const token = useSelector(state => state.user.token);

    return (
        <Route
            {...rest}
            render={() =>
                token ? (
                    children
                ) : (
                        <Link
                            to={{
                                pathname: "/login",
                                state: { from: rest.location }
                            }}
                        />
                    )
            }
        />
    );
};
export default  PrivateRoute