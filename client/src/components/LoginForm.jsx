import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleTextInputChange } from '../store/actions';
import { login } from '../store/actions/loginActions';

const LoginForm = props => {
  const login = e => {
    e.preventDefault();
    props.login(props.loginUsername, props.loginPassword);
  };

  return (
    <form className='signin-container__form' onSubmit={login}>
      <div className='signin-container__overlay' />
      <h2 className='signin-container__form__header'>Login</h2>
      <div className='signin-container__form__field'>
        <label
          className='signin-container__form__field__label'
          htmlFor='loginUsername'
        >
          Username:
        </label>
        <input
          className='signin-container__form__field__input'
          type='text'
          id='loginUsername'
          name='loginUsername'
          placeholder='Enter username'
          required
          value={props.loginUsername}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div className='signin-container__form__field'>
        <label
          className='signin-container__form__field__label'
          htmlFor='loginPassword'
        >
          Password:
        </label>
        <input
          className='signin-container__form__field__input'
          type='password'
          id='loginPassword'
          name='loginPassword'
          placeholder='Enter password'
          required
          value={props.loginPassword}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div className="signin-container__form__buttons">
        <button className="signin-container__form__buttons__submit">Log In</button>
      </div>
    </form>
  );
};

LoginForm.propTypes = {
  loginUsername: PropTypes.string.isRequired,
  loginPassword: PropTypes.string.isRequired,
  handleTextInputChange: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    loginUsername: state.loginReducer.loginUsername,
    loginPassword: state.loginReducer.loginPassword
  };
};

export default connect(
  mapStateToProps,
  {
    handleTextInputChange,
    login
  }
)(LoginForm);
