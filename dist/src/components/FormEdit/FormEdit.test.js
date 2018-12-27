var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _FormEdit = require('./FormEdit');

var _FormEdit2 = _interopRequireDefault(_FormEdit);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe('FormEdit', function() {
  var props = void 0;

  beforeEach(function() {
    props = {
      item: {
        value: 'someValue',
        id: '0',
        completed: false,
      },
      handleEditItem: jest.fn(),
      handleCancelEditItem: jest.fn(),
    };
  });

  it('should handle form submission', function() {
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_FormEdit2.default, props));

    component.find('form').simulate('submit', { preventDefault: jest.fn() });

    expect(props.handleEditItem).toHaveBeenCalledWith(props.item);
    expect(props.handleCancelEditItem).not.toHaveBeenCalled();
  });

  it('should handle form submission with a new input field value', function() {
    var value = 'someNewValue';

    var component = (0, _enzyme.shallow)(_react2.default.createElement(_FormEdit2.default, props));

    component.find('#input-edit-todo-item').simulate('change', { target: { value: value } });

    expect(component.state('itemValue')).toBe(value);

    component.find('form').simulate('submit', { preventDefault: jest.fn() });

    expect(props.handleEditItem).toHaveBeenCalledWith(Object.assign({}, props.item, { value: value }));
    expect(props.handleCancelEditItem).not.toHaveBeenCalled();
  });

  it('should set handleCancelEditItem prop when button is pressed', function() {
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_FormEdit2.default, props));

    component.find('#cancel-edit-todo-item').simulate('click');

    expect(props.handleCancelEditItem).toHaveBeenCalled();
    expect(props.handleEditItem).not.toHaveBeenCalledWith();
  });

  it('should set handleCancelEditItem prop when `escape` key is pressed', function() {
    var escapeEv = {
      code: 'Escape',
    };

    var eventMap = {
      keyup: null,
    };

    window.addEventListener = jest.fn(function(event, cb) {
      eventMap[event] = cb;
    });

    var component = (0, _enzyme.mount)(_react2.default.createElement(_FormEdit2.default, props));
    eventMap.keyup(escapeEv);

    expect(props.handleCancelEditItem).toHaveBeenCalledWith(escapeEv);
    expect(props.handleEditItem).not.toHaveBeenCalled();
  });
});

//# sourceMappingURL=FormEdit.test.js.map
