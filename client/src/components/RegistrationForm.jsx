import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { handleTextInputChange, registerNewUser } from '../store/actions';

const RegistrationForm = props => {
  const registerNewUser = e => {
    e.preventDefault();
    props.registerNewUser(
      props.registrationUsername,
      props.registrationPassword
    );
  };

  return (
    <form onSubmit={registerNewUser}>
      <h2>Register</h2>
      <div>
        <label htmlFor='registrationUsername'>Username</label>
        <input
          type='text'
          id='registrationUsername'
          name='registrationUsername'
          placeholder='Enter username'
          required
          value={props.registrationUsername}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div>
        <label htmlFor='registrationPassword'>Password</label>
        <input
          type='password'
          id='registrationPassword'
          name='registrationPassword'
          placeholder='Enter password'
          required
          value={props.registrationPassword}
          onChange={props.handleTextInputChange}
        />
      </div>
      <div>
        <button>Log In</button>
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
    registerNewUser
  }
)(RegistrationForm);
