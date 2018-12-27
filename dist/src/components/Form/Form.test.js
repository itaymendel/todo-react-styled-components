var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Form = require('./Form');

var _Form2 = _interopRequireDefault(_Form);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe('FormEdit', function() {
  var props = void 0;

  beforeEach(function() {
    props = {
      item: '',
      handleAddItem: jest.fn(),
    };
  });

  it('should handle form submission', function() {
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_Form2.default, props));

    component.find('form').simulate('submit', { preventDefault: jest.fn() });

    expect(props.handleAddItem).toHaveBeenCalledWith(props.item);
  });

  it('should handle form submission with a new input field value', function() {
    var value = 'someNewValue';

    var component = (0, _enzyme.shallow)(_react2.default.createElement(_Form2.default, props));

    component.find('#new-todo-item').simulate('change', { target: { value: value } });

    expect(component.state('itemValue')).toBe(value);

    component.find('form').simulate('submit', { preventDefault: jest.fn() });

    expect(props.handleAddItem).toHaveBeenCalledWith(value);
  });
});

//# sourceMappingURL=Form.test.js.map
