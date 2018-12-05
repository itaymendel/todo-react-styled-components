import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

import styles from './PropertyBar.module.css';

const propertyBarPropTypes = {
  id: PropTypes.string.isRequired,
  handleSelectEditItem: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
};

const PropertyBar = props => (
  <div className={styles.component}>
    <button
      className={classnames(styles.button, "btn btn-secondary")} 
      onClick={() => props.handleSelectEditItem(props.id)}>
      <FontAwesomeIcon icon={faEdit} size="sm" />
    </button>
    <button className={classnames(styles.button, "btn btn-danger")}  onClick={() => props.handleDeleteItem(props.id)}>
      <FontAwesomeIcon icon={faTrash} size="sm" />
    </button>
  </div>
);

PropertyBar.propTypes = propertyBarPropTypes;

export default PropertyBar;
