import React from 'react';
import PropTypes from 'prop-types';
import {FaEdit, FaTrash} from 'react-icons/fa'
import styled from 'styled-components';

const Component = styled.div`
  position: absolute;
  right: 1em;
  top: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
`;

const Button = styled.button`
  margin-right: 0.5em;
  opacity: 0.1;
  transition: opacity 0.25s ease-in-out;

  &:hover {
    opacity: 1;
    transition: opacity 0.25s ease-in-out;
  }
`;

const propertyBarPropTypes = {
  id: PropTypes.string.isRequired,
  handleSelectEditItem: PropTypes.func.isRequired,
  handleDeleteItem: PropTypes.func.isRequired,
};

const PropertyBar = props => (
  <Component>
    <Button
      className='btn btn-secondary'
      onClick={() => props.handleSelectEditItem(props.id)}>
      <FaEdit size="20" />
    </Button>
    <Button
      className='btn btn-danger'
      onClick={() => props.handleDeleteItem(props.id)}>
      <FaTrash size="20" />
    </Button>
  </Component>
);

PropertyBar.propTypes = propertyBarPropTypes;

export default PropertyBar;
