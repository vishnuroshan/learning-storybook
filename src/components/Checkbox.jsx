import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
// const MUICheckBox = ({
//   onChange,
//   label,
//   checked,
//   defaultChecked,
//   inputProps,
//   color,
//   indeterminate,
//   labelPlacement,
//   ...args
// }) => {
//   const checkboxLabel = { inputProps: { 'aria-label': label } };
//   console.log(checkboxLabel);
//   return (
//     <Checkbox
//       {...checkboxLabel}
//       disabled={false}
//       defaultChecked={false}
//       labelPlacement={labelPlacement}
//       indeterminate={indeterminate}
//       checked={checked}
//       color={color}
//       onChange={onChange}
//       {...args}
//     />
//   );
// };

const MUICheckBox = ({ label, ...props }) => {
  const [isChecked, setChecked] = React.useState(true);

  console.log(label);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControlLabel label={label} control={<Checkbox checked={isChecked} onChange={handleChange} {...props} />} />
  );
};

MUICheckBox.defaultProps = {
  label: 'checkbox',
};

export { MUICheckBox };
