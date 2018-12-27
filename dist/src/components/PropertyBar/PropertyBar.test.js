'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _PropertyBar = require('./PropertyBar');

var _PropertyBar2 = _interopRequireDefault(_PropertyBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Checkout', function () {
  var props = void 0;

  beforeEach(function () {
    props = {
      id: 'testId',
      handleSelectEditItem: jest.fn(),
      handleDeleteItem: jest.fn()
    };
  });

  it('should set handleSelectEditItem prop when edit button is clicked', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_PropertyBar2.default, props));

    component.find('.property_bar__button').first().simulate('click');

    expect(props.handleSelectEditItem).toBeCalled();
    expect(props.handleDeleteItem).not.toHaveBeenCalled();
  });

  it('should set handleDeleteItem prop when delete button is clicked', function () {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_PropertyBar2.default, props));

    component.find('.property_bar__button').last().simulate('click');

    expect(props.handleDeleteItem).toBeCalled();
    expect(props.handleSelectEditItem).not.toHaveBeenCalled();
  });
});

//# sourceMappingURL=PropertyBar.test.js.map