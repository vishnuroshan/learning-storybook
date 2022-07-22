import * as React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import PropTypes from 'prop-types';

const BasicSwitch = (props) => {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <FormControlLabel label={props.label} control={<Switch checked={checked} onChange={handleChange} {...props} />} />
  );
};

BasicSwitch.propTypes = {
  label: PropTypes.string,
};

BasicSwitch.defaultProps = {
  label: 'switch',
};

export { BasicSwitch };
