'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('App', function () {
  it('should render component without errors', function () {
    var props = {
      handleAddItem: jest.fn(),
      handleCancelEditItem: jest.fn(),
      handleDeleteItem: jest.fn(),
      handleEditItem: jest.fn(),
      handleItemCompletion: jest.fn(),
      handleSelectEditItem: jest.fn(),
      handleReorderItem: jest.fn()
    };

    var component = (0, _enzyme.shallow)(_react2.default.createElement(_App2.default, props));

    expect(component).toHaveLength(1);
  });
});

//# sourceMappingURL=App.test.js.map