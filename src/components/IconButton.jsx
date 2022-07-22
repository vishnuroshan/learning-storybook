import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const BasicIconButton = () => {
  return (
    <IconButton color="primary" aria-label="upload picture" component="label">
      <input hidden accept="image/*" type="file" />
      <PhotoCamera />
    </IconButton>
  );
};

export { BasicIconButton };
