import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--background-color);
`;

const footerPropTypes = {
  className: PropTypes.string.isRequired,
};

const Footer = ({ className }) => (
  <div className={className}>
    <Container />
  </div>
);

Footer.propTypes = footerPropTypes;

export default Footer;
