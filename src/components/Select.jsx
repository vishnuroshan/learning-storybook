import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import PropTypes from 'prop-types';

const MUISelect = ({ label, options }) => {
  const [value, setValue] = React.useState('option1');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <InputLabel id="demo-simple-select-label">{label}</InputLabel>
      <Select
        autoWidth
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={value}
        label={label}
        onChange={handleChange}
      >
        {options.map(({ value, label }, index) => (
          <MenuItem key={index} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

MUISelect.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
};

MUISelect.defaultProps = {
  label: 'select',
  options: [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
  ],
};
export { MUISelect };
