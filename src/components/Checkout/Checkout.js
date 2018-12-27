import React from 'react';
import PropTypes from 'prop-types';
import { FaSquare, FaCheckSquare } from 'react-icons/fa';

const checkoutPropTypes = {
  isCompleted: PropTypes.bool.isRequired,
};

const Checkout = props => (
  <span>
    {props.isCompleted ? (
      <FaCheckSquare size="30" />
    ) : (
      <FaSquare size="30" />
    )}
  </span>
);

Checkout.propTypes = checkoutPropTypes;

export default Checkout;
