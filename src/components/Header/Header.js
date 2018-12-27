import React from 'react';
import PropTypes from 'prop-types';
import { FaListAlt } from 'react-icons/fa';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: var(--background-color);
`;

const SpanElement = styled.span`
  margin: 0 0.2em;
  vertical-align: super;
  font-size: 1.3em;
`;

const headerPropTypes = {
  className: PropTypes.string.isRequired,
};

const Header = ({ className }) => (
  <div className={className}>
    <Container>
      <nav className="navbar">
        <SpanElement className="navbar-brand">
          <FaListAlt className="d-inline-block" size="40" alt="List emoji" />
        </SpanElement>
        <SpanElement>Bit Todo App</SpanElement>
      </nav>
    </Container>
  </div>
);

Header.propTypes = headerPropTypes;

export default Header;
