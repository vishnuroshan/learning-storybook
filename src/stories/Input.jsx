import React from 'react';
import PropTypes from 'prop-types';
// import shortid from 'shortid';
import './input.css';

const renderErrorMessage = (errors) => <div className="error">{errors.message}</div>;

export const Input = ({ errors, name, label, type, placeholder, disabled, onClick, ...props }) => {
  return (
    <div className="input-container">
      <label>{label}</label>
      <input type={type} name={name} placeholder={placeholder} {...props} required />
      {errors && Object.keys(errors).length > 0 && errors.code === name && renderErrorMessage(errors)}
    </div>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(['password', 'text', 'email']),
  placeholder: PropTypes.string,
  onClick: PropTypes.func,
  errors: PropTypes.object,
};
Input.defaultProps = {
  label: 'text',
  type: 'text',
  placeholder: 'enter text here',
  onClick: function (event) {
    console.log('clicked', event);
  },
  errors: undefined,
};
