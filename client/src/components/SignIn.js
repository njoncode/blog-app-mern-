import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import '../styles/signIn.scss';

import FormInput from './FormInput';
import CustomButton from './CustomButton';
import { signInStartAction } from '../redux/user/userActions';

const SignIn = ({ signInStartDispatch }) => {
  const [userCredentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { email, password } = userCredentials;

  const handleOnChange = (event) => {
    const { value, name } = event.target;

    setCredentials({ ...userCredentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('userCredentials: ', userCredentials);

    signInStartDispatch(userCredentials);
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          handleChange={handleOnChange}
          value={email}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          value={password}
          handleChange={handleOnChange}
          label="Password"
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
        </div>
        ¯
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signInStartDispatch: (data) => dispatch(signInStartAction(data)),
});

SignIn.propTypes = {
  signInStartDispatch: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(SignIn);
