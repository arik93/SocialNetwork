import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';


const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
};

export default function withAuthRedirect(Component) {
  const RedirectComponent = (props) => {
    if (!props.isAuth) {
      return <Navigate to={"/login"} />
    };

    return <Component {...props} />
  };

  const ConnectedRedirectComponent = connect(mapStateToProps)(RedirectComponent);

  return ConnectedRedirectComponent;
};
