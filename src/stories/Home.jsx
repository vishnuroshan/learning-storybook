import React from 'react';
import PropTypes from 'prop-types';

export const Home = ({ title }) => {
  return <div>{title}</div>;
};

Home.propTypes = {
  title: PropTypes.string,
};

Home.defaultProps = {
  title: 'Home',
};
