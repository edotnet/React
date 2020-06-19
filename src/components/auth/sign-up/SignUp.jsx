import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { signUp } from '../../../store/actions';
import Card from '../../../infrastructure/controls/card/Card';
import Input from '../../../infrastructure/controls/input/Input';
import Password from '../../../infrastructure/controls/input/password/Password';
import Checkbox from '../../../infrastructure/controls/input/checkbox/Checkbox';
import Button from '../../../infrastructure/controls/button/Button';
import Divider from '../../../infrastructure/controls/divider/Divider';
import Link from '../../../infrastructure/controls/link/Link';
import RouterConfig from '../../../infrastructure/router/config.json';
import concatClsx from '../../../infrastructure/helpers/classname.helper';
import './SignUp.scss';

const SignUp = ({ className, signUpUser }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const history = useHistory();

  const onSignUp = () => {
    signUpUser({
      firstName,
      lastName,
      email,
      password,
      rememberMe
    });

    history.push(`${RouterConfig.Auth.VerifyEmail}?returnUrl=${RouterConfig.Auth.SignIn}&email=${email}`);
  }

  return (
    <div className={concatClsx('sign-up', className)}>
      <Card title="Sign Up">
        <div className="name-info pb-md">
          <Input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)}></Input>
          <Input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)}></Input>
        </div>
        <Input className="pb-md" type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}></Input>
        <Password className="mb-md" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></Password>
        <Checkbox className="w-100 pb-md" value={rememberMe} title="Remember me" onChange={e => setRememberMe(e.target.value)}></Checkbox>
        <div className="w-100 pb-md">
          <Button title="Sign Up" color="primary" onClick={onSignUp}></Button>
        </div>
        <div className="w-100 pb-md align-center">
          <span className="text-secondary">Forgot Password</span>
        </div>
        <Divider title="Or"></Divider>
        <div className="external-auths pb-lg">
          <Button className="facebook" title="Facebook" icon={faFacebookF}></Button>
          <Button className="google" title="Google" icon={faGoogle}></Button>
        </div>
        <div className="align-center">
          <span className="text-primary">
            Already have an account?&nbsp;
            <Link to={RouterConfig.Auth.SignIn}>Login</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpUser: (user) => dispatch(signUp(user))
});

export default connect(null, mapDispatchToProps)(SignUp);
