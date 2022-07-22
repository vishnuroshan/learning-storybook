import * as React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

const MUITextField = ({
  label,
  onClick,
  helperText,
  variant,
  defaultValue,
  InputLabelProps,
  InputProps,
  startIcon,
  endIcon,
  type,
  onChange,
  ...args
}) => {
  return (
    <div>
      <TextField
        label={label}
        startIcon={startIcon}
        endIcon={endIcon}
        variant={variant}
        type={type}
        helperText={helperText}
        defaultValue={defaultValue}
        InputLabelProps={InputLabelProps}
        InputProps={InputProps}
        onClick={onClick}
        onChange={onChange}
        {...args}
      />
    </div>
  );
};

MUITextField.propTypes = {
  type: PropTypes.oneOf(['number', 'search', 'text', 'password', 'email']),
  variant: PropTypes.oneOf(['standard', 'filled', 'outlined']),
  color: PropTypes.oneOf(['inherit', 'primary', 'info', 'warning', 'secondary', 'error', 'success']),
  onClick: PropTypes.func,
  onChange: PropTypes.func,
  InputProps: PropTypes.object,
  InputlabelProps: PropTypes.object,

  error: PropTypes.bool,
  helperText: PropTypes.string,
};

MUITextField.defaultProps = {
  type: 'text',
  variant: 'standard',
  color: 'success',
};

export { MUITextField };
