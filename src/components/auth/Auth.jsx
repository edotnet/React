import { connect } from 'react-redux';
import React from 'react';
import { Route, Redirect, useHistory } from 'react-router-dom';
import SignIn from './sign-in/SignIn';
import SignUp from './sign-up/SignUp';
import VerifyEmail from './verify-email/VerifyEmail';
import Link from '../../infrastructure/controls/link/Link';
import RouterConfig from '../../infrastructure/router/config.json';
import './Auth.scss';

const Auth = ({authenticated}) => {
  const history = useHistory();

  if (authenticated) {
    history.push(RouterConfig.Home);
  }

  return (
    <div className="auth">
      <div className="auth__content">
        <div className="auth-navbar">
          <Link className="btn btn-link" to={RouterConfig.Auth.SignIn}>Login</Link>
          <Link className="btn btn-link" to={RouterConfig.Auth.SignUp}>Sign Up</Link>
        </div>
        <Route path={RouterConfig.Auth.path} render={() =>
          <Redirect to={{ pathname: RouterConfig.Auth.SignIn }}>
          </Redirect>
        }></Route>
        <Route path={RouterConfig.Auth.SignIn} component={() => <SignIn className="auth-form"></SignIn>} />
        <Route path={RouterConfig.Auth.SignUp} component={() => <SignUp className="auth-form"></SignUp>} />
        <Route path={RouterConfig.Auth.VerifyEmail} component={() => <VerifyEmail className="auth-form"></VerifyEmail>} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  authenticated: !!state.loggedInUser
});

export default connect(mapStateToProps, null)(Auth);
