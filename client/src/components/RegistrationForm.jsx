import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleTextInputChange } from '../store/actions';
import { clearRegistrationInputs, registerNewUser } from '../store/actions/registrationActions';

const RegistrationForm = props => {
  useEffect(() => props.clearRegistrationInputs, [])

  const registerNewUser = e => {
    e.preventDefault();
    props.registerNewUser(
      props.registrationUsername,
      props.registrationPassword
    );
  };

  return (
    <form className='signin-container__form' onSubmit={registerNewUser}>
      <div className='signin-container__overlay' />
      <h2 className='signin-container__form__header'>Register</h2>
      <div className='signin-container__form__field'>
        <label
          className='signin-container__form__field__label'
          htmlFor='registrationUsername'
        >
          Username
        </label>
        <input
          className='signin-container__form__field__input'
          type='text'
          id='registrationUsername'
          name='registrationUsername'
          placeholder='Enter username'
          required
          value={props.registrationUsername}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div className='signin-container__form__field'>
        <label
          className='signin-container__form__field__label'
          htmlFor='registrationPassword'
        >
          Password
        </label>
        <input
          className='signin-container__form__field__input'
          type='password'
          id='registrationPassword'
          name='registrationPassword'
          placeholder='Enter password'
          required
          value={props.registrationPassword}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div className='signin-container__form__buttons'>
        <button className="signin-container__form__buttons__submit">Register</button>
      </div>
    </form>
  );
};

RegistrationForm.propTypes = {
  registrationUsername: PropTypes.string.isRequired,
  registrationPassword: PropTypes.string.isRequired,
  handleTextInputChange: PropTypes.func.isRequired,
  registerNewUser: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    registrationUsername: state.registrationReducer.registrationUsername,
    registrationPassword: state.registrationReducer.registrationPassword
  };
};

export default connect(
  mapStateToProps,
  {
    handleTextInputChange,
    clearRegistrationInputs,
    registerNewUser
  }
)(RegistrationForm);
