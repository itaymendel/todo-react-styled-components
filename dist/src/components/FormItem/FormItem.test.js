var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _FormItem = require('./FormItem');

var _FormItem2 = _interopRequireDefault(_FormItem);

var _PropertyBar = require('../PropertyBar/PropertyBar');

var _PropertyBar2 = _interopRequireDefault(_PropertyBar);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

describe('FormItem', function() {
  var props = void 0;

  beforeEach(function() {
    props = {
      item: {
        value: 'someValue',
        id: '0',
        completed: false,
      },
      handleDeleteItem: jest.fn(),
      handleSelectEditItem: jest.fn(),
      handleItemCompletion: jest.fn(),
    };
  });

  it('should set handleItemCompletion prop when an item is clicked', function() {
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_FormItem2.default, props));

    component
      .find('.form_item__component')
      .children()
      .first()
      .simulate('click');

    expect(props.handleItemCompletion).toHaveBeenCalledWith(props.item);
    expect(props.handleDeleteItem).not.toHaveBeenCalled();
    expect(props.handleSelectEditItem).not.toHaveBeenCalled();
  });

  it('should show a PropertyBar component when displayMenu is set', function() {
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_FormItem2.default, props)).update();

    expect(component.state('displayMenu')).toBe(false);
    expect(component.find(_PropertyBar2.default).length).toBe(0);

    component.instance().setDisplayMenu(true);
    expect(component.find(_PropertyBar2.default).length).toBe(1);
  });

  it('should set displayMenu prop when `mouseMove/mouseLeave` events are fired', function() {
    var component = (0, _enzyme.shallow)(_react2.default.createElement(_FormItem2.default, props));

    component.find('.form_item__component').simulate('mouseMove');
    expect(component.state('displayMenu')).toBe(true);

    component.find('.form_item__component').simulate('mouseLeave');
    expect(component.state('displayMenu')).toBe(false);
  });
});

//# sourceMappingURL=FormItem.test.js.map
