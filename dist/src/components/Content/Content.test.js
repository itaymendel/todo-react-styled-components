var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _Content = require('./Content');

var _Content2 = _interopRequireDefault(_Content);

var _FormItem = require('../FormItem/FormItem');

var _FormItem2 = _interopRequireDefault(_FormItem);

var _FormEdit = require('../FormEdit/FormEdit');

var _FormEdit2 = _interopRequireDefault(_FormEdit);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  } else {
    return Array.from(arr);
  }
}

describe('Content', function() {
  var props = void 0;

  beforeEach(function() {
    props = {
      items: [],
      editingItem: {},
      className: 'content',
      handleAddItem: jest.fn(),
      handleCancelEditItem: jest.fn(),
      handleDeleteItem: jest.fn(),
      handleEditItem: jest.fn(),
      handleItemCompletion: jest.fn(),
      handleSelectEditItem: jest.fn(),
      handleReorderItem: jest.fn(),
    };
  });

  it('should show a todo items list', function() {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_Content2.default, props));

    // Initial render
    expect(
      component
        .find('.content__todos')
        .first()
        .children(),
    ).toHaveLength(0);

    var item = {
      value: 'test',
      id: '1',
      completed: false,
    };

    props.items = [].concat(_toConsumableArray(props.items), [
      (0, _enzyme.shallow)(
        _react2.default.createElement(_FormItem2.default, Object.assign({}, props, { item: item })),
      ),
    ]);

    expect(component.find(_FormItem2.default)).toBeDefined();
  });

  it('should show an editing item form when an item is selected', function() {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_Content2.default, props));

    var item = {
      value: 'test',
      id: '1',
      completed: false,
    };

    props.items = [].concat(_toConsumableArray(props.items), [
      (0, _enzyme.shallow)(
        _react2.default.createElement(_FormItem2.default, Object.assign({}, props, { item: item })),
      ),
    ]);
    props.editingItem = Object.assign({}, props.editingItem, { item: item });

    expect(component.find(_FormEdit2.default)).toBeDefined();
  });

  it('should call handleReorderItem prop on dragEnd', function() {
    var component = (0, _enzyme.mount)(_react2.default.createElement(_Content2.default, props));

    var action = {
      source: {
        index: 0,
      },
      destination: {
        index: 1,
      },
    };

    expect(component.instance().onDragEnd({})).toBeUndefined();

    component.instance().onDragEnd(action);
    expect(props.handleReorderItem).toBeCalledWith(0, 1);
  });
});

//# sourceMappingURL=Content.test.js.map
