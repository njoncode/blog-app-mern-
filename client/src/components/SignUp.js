import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../styles/signUp.scss';

import { signUpStartAction } from '../redux/user/userActions';

import FormInput from './FormInput';
import CustomButton from './CustomButton';

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const SignUp = ({ signUpStartDispatch }) => {
  const [userCredentials, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const checkEmail = validateEmail(email);

    if (!checkEmail) {
      alert('Invalid Email Address!');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    signUpStartDispatch({ displayName, email, password, confirmPassword });
  };

  return (
    <div className="sign-up">
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          onChange={handleOnChange}
          label="Display Name"
          required
        />
        <FormInput
          type="text"
          name="email"
          value={email}
          onChange={handleOnChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          onChange={handleOnChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          onChange={handleOnChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStartDispatch: (userCredentials) =>
    dispatch(signUpStartAction(userCredentials)),
});

SignUp.propTypes = {
  signUpStartDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignUp);
