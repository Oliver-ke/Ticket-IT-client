import React from 'react';
import { Route, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({component: Component, auth, ...rest}) =>{
    return(
        <Route
            {...rest}
            render={items => auth.isAuthenticated === true ? (
                <Component {...items} />
            ): (
                <Redirect to="/login" />
            )}
       />
    );
}

PrivateRoute.propType = {
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state =>({
    auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);


