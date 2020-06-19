import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { authenticate } from '../../../store/actions';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Card from '../../../infrastructure/controls/card/Card';
import Input from '../../../infrastructure/controls/input/Input';
import Password from '../../../infrastructure/controls/input/password/Password';
import Checkbox from '../../../infrastructure/controls/input/checkbox/Checkbox';
import Button from '../../../infrastructure/controls/button/Button';
import Divider from '../../../infrastructure/controls/divider/Divider';
import Link from '../../../infrastructure/controls/link/Link';
import RouterConfig from '../../../infrastructure/router/config.json';
import concatClsx from '../../../infrastructure/helpers/classname.helper';

const SignIn = ({ className, onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const history = useHistory();

  const login = () => {
    onLogin({
      email,
      password,
      rememberMe
    });

    history.push(RouterConfig.Home);
  }

  return (
    <div className={concatClsx('sign-in', className)}>
      <Card title="Login">
        <Input className="w-100 pb-md" type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)}></Input>
        <Password className="w-100 mb-md" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}></Password>
        <Checkbox className="w-100 pb-md" value={rememberMe} title="Remember me" onChange={e => setRememberMe(e.target.value)}></Checkbox>
        <div className="w-100 pb-md">
          <Button title="Login" color="primary" onClick={() => login()}></Button>
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
            Don't have an account?&nbsp;
            <Link to={RouterConfig.Auth.SignUp}>Sign Up</Link>
          </span>
        </div>
      </Card>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onLogin: (user) => dispatch(authenticate(user))
});

export default connect(null, mapDispatchToProps)(SignIn);
