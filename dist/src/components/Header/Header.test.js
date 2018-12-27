var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTestRenderer = require('react-test-renderer');

var _reactTestRenderer2 = _interopRequireDefault(_reactTestRenderer);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

test('Header gets rendered with a given classname', function() {
  var className = 'test-classname';
  var component = _reactTestRenderer2.default.create(
    _react2.default.createElement(_Header2.default, { className: className }),
  );
  var tree = component.toJSON();
  expect(tree).toMatchSnapshot();
  expect(tree.props.className).toEqual(className);
});

//# sourceMappingURL=Header.test.js.map
