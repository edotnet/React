import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import RouterConfig from '../../infrastructure/router/config.json';
import './Home.scss';

const Home = ({ authenticated, authenticatedUser }) => {
  const history = useHistory();

  if (!authenticated || !authenticatedUser) {
    history.push(RouterConfig.Auth.path);
  }

  return (
    <div className="home">
      <p>Home</p>

      {authenticatedUser &&
        <div>
          <p>First Name = {authenticatedUser.firstName},</p>
          <p>Last Name = {authenticatedUser.lastName},</p>
          <p>Email = {authenticatedUser.email},</p>
          <p>Password = {authenticatedUser.password},</p>
          <p>Remember Me = {authenticatedUser.rememberMe},</p>
        </div>
      }
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    authenticated: !!state.users.loggedInUser,
    authenticatedUser: state.users.loggedInUser
  }
};

export default connect(mapStateToProps, null)(Home);
