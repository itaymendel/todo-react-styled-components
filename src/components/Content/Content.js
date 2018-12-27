import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

import Form from '../Form/Form';
import FormEdit from '../FormEdit/FormEdit';
import FormItem from '../FormItem/FormItem';

const Todos = styled.div`
  margin: 1em 0 1em 0;
`;

const TodosListItem = styled.div`
  opacity: 1;
  margin-bottom: 0.5em;
  animation: fadeIn 0.3s 1;
  animation-fill-mode: forwards;
`;

class Content extends Component {
  static propTypes = {
    items: PropTypes.array.isRequired,
    editingItem: PropTypes.shape({
      value: PropTypes.string,
      id: PropTypes.string,
      completed: PropTypes.bool,
    }),
    className: PropTypes.string.isRequired,
    handleAddItem: PropTypes.func.isRequired,
    handleCancelEditItem: PropTypes.func.isRequired,
    handleDeleteItem: PropTypes.func.isRequired,
    handleEditItem: PropTypes.func.isRequired,
    handleItemCompletion: PropTypes.func.isRequired,
    handleSelectEditItem: PropTypes.func.isRequired,
    handleReorderItem: PropTypes.func.isRequired,
  };

  static defaultProps = {
    items: [],
    editingItem: {},
  };

  onDragEnd = result => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    this.props.handleReorderItem(result.source.index, result.destination.index);
  };

  render() {
    return (
      <div className={this.props.className}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card text-center">
                <div className="card-body">
                  <h5 className="card-title">Welcome!</h5>
                  <p className="card-text">To get started, add some items to your list:</p>
                  <div className="d-inline-block">
                    <Form handleAddItem={this.props.handleAddItem} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {this.props.items.length ? (
            <div className="row justify-content-center">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <Todos>
                  <ul className="list-group content__todos__ul">
                    <DragDropContext onDragEnd={this.onDragEnd}>
                      <Droppable droppableId="droppable">
                        {provided => (
                          <div ref={provided.innerRef}>
                            {this.props.items.map((item, index) => (
                              <Draggable key={index} draggableId={item.id} index={index}>
                                {provided => (
                                  <TodosListItem
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}>
                                    {this.props.editingItem.id === item.id ? (
                                      <FormEdit
                                        item={this.props.editingItem}
                                        handleEditItem={this.props.handleEditItem}
                                        handleCancelEditItem={this.props.handleCancelEditItem}
                                      />
                                    ) : (
                                      <FormItem
                                        item={item}
                                        handleDeleteItem={this.props.handleDeleteItem}
                                        handleSelectEditItem={this.props.handleSelectEditItem}
                                        handleItemCompletion={this.props.handleItemCompletion}
                                      />
                                    )}
                                  </TodosListItem>
                                )}
                              </Draggable>
                            ))}
                          </div>
                        )}
                      </Droppable>
                    </DragDropContext>
                  </ul>
                </Todos>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Content;
