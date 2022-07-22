import * as React from 'react';
import Button from '@mui/material/Button';
import PropTypes from 'prop-types';

const MUIButton = ({ label, onClick, variant, color, size, startIcon, endIcon, ...args }) => {
  console.log(variant);
  return (
    <Button
      variant={variant}
      color={color}
      size={size}
      startIcon={startIcon}
      endIcon={endIcon}
      onClick={onClick}
      {...args}
    >
      {label}
    </Button>
  );
};

MUIButton.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  variant: PropTypes.oneOf(['text', 'contained', 'outlined']),
  color: PropTypes.oneOf(['inherit', 'primary', 'info', 'warning', 'secondary', 'error', 'success']),
  onClick: PropTypes.func,
};

MUIButton.defaultProps = {
  variant: 'text',
  size: 'medium',
  color: 'success',
  onClick: undefined,
};

export { MUIButton };
