import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import PropertyBar from '../PropertyBar/PropertyBar';
import Checkout from '../Checkout/Checkout';

const FormItemStyle = styled.li`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
  margin-bottom: 0.5em;
`;

const CheckoutStyle = styled.div`
  margin-right: 0.5em;
  height: 100%;
`;

export default class FormItem extends Component {
  static propTypes = {
    item: PropTypes.shape({
      value: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    }),
    handleDeleteItem: PropTypes.func.isRequired,
    handleSelectEditItem: PropTypes.func.isRequired,
    handleItemCompletion: PropTypes.func.isRequired,
  };

  state = { displayMenu: false };

  setDisplayMenu = bool => {
    if (this.state.displayMenu !== bool) {
      this.setState({ displayMenu: bool });
    }
  };

  render() {
    return (
      <FormItemStyle
        className='list-group-item form-control'
        onMouseMove={() => this.setDisplayMenu(true)}
        onMouseLeave={() => this.setDisplayMenu(false)}>
        <div className="text-truncate" onClick={() => this.props.handleItemCompletion(this.props.item)}>
          <CheckoutStyle className='d-inline-block'>
            <Checkout isCompleted={this.props.item.completed} />
          </CheckoutStyle>
          <span>{this.props.item.value}</span>
        </div>

        {this.state.displayMenu ? (
          <PropertyBar
            id={this.props.item.id}
            handleSelectEditItem={this.props.handleSelectEditItem}
            handleDeleteItem={this.props.handleDeleteItem}
          />
        ) : null}
      </FormItemStyle>
    );
  }
}
