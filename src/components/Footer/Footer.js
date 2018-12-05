import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.css';

const footerPropTypes = {
  className: PropTypes.string.isRequired,
};

const Footer = ({ className }) => (
  <div className={className}>
    <div className={styles.container}>
    </div>
  </div>
);

Footer.propTypes = footerPropTypes;

export default Footer;
