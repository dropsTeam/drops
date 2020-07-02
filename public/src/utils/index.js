import React from 'react'
import { Route, Redirect } from 'react-router-dom';


export function PrivateRoute({ component: Component, access, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => access === true
                ? <Component {...props} />
                :  <Redirect to={{ pathname: props.history.goBack() , state: { from: props.location } }} />}
        />
    )
}
