import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

import styles from './Header.module.css';

const headerPropTypes = {
  className: PropTypes.string.isRequired,
};

const Header = ({ className }) => (
  <div className={className}>
    <div className={styles.container}>
      <nav className="navbar">
        <span className={classnames(styles.span, "navbar-brand")}>
          <FontAwesomeIcon className="d-inline-block" icon={faListAlt} size="lg" alt="List emoji" />
        </span>
        <span className={styles.span}>Bit Todo App</span>
      </nav>
    </div>
  </div>
);

Header.propTypes = headerPropTypes;

export default Header;
