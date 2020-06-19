import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { faArrowLeft, faSync } from '@fortawesome/free-solid-svg-icons';
import { verifyEmail } from '../../../store/actions';
import Card from '../../../infrastructure/controls/card/Card';
import Input from '../../../infrastructure/controls/input/Input';
import Button from '../../../infrastructure/controls/button/Button';
import concatClsx from '../../../infrastructure/helpers/classname.helper';
import Icon from '../../../infrastructure/controls/icon/Icon';
import Link from '../../../infrastructure/controls/link/Link';
import useQuery from '../../../infrastructure/helpers/query.helper';
import RouterConfig from '../../../infrastructure/router/config.json';
import './VerifyEmail.scss';

const VerifyEmail = ({ className, verifyEmail }) => {
  const history = useHistory();
  const query = useQuery(); 
  const returnUrl = query.get('returnUrl');
  const email = query.get('email');

  const onVerify = () => {
    verifyEmail(email);
    history.push(RouterConfig.Auth.SignIn);
  }

  return (
    <div className={concatClsx('verify-email', className)}>
      <Card title="Check your email">
        <div className="align-center pb-md">
          <span className="text-primary">Enter the verification code we sent to your email</span>
        </div>

        <Input className="pb-md" placeholder="Enter code"></Input>
        <div className="pb-md">
          <Button title="Verify" color="primary" onClick={onVerify}></Button>
        </div>

        <div className="back-resend-section">
          <Link to={returnUrl} className="back">
            <Icon className="back-icon" name={faArrowLeft}></Icon>
            <span className="text-secondary">Back</span>
          </Link>
          <Link to="# " className="resend">
            <Icon className="resend-icon" name={faSync}></Icon>
            <span className="text-secondary">Resend Code</span>
          </Link>
        </div>
      </Card>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  verifyEmail: (email) => dispatch(verifyEmail(email))
});

export default connect(null, mapDispatchToProps)(VerifyEmail);
