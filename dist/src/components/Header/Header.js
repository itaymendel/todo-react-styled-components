'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background: var(--background-color);\n'], ['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background: var(--background-color);\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin: 0 0.2em;\n  vertical-align: super;\n  font-size: 1.3em;\n'], ['\n  margin: 0 0.2em;\n  vertical-align: super;\n  font-size: 1.3em;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fa = require('react-icons/fa');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var SpanElement = _styledComponents2.default.span(_templateObject2);

var headerPropTypes = {
  className: _propTypes2.default.string.isRequired
};

var Header = function Header(_ref) {
  var className = _ref.className;
  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(
      Container,
      null,
      _react2.default.createElement(
        'nav',
        { className: 'navbar' },
        _react2.default.createElement(
          SpanElement,
          { className: 'navbar-brand' },
          _react2.default.createElement(_fa.FaListAlt, { className: 'd-inline-block', size: '40', alt: 'List emoji' })
        ),
        _react2.default.createElement(
          SpanElement,
          null,
          'Bit Todo App'
        )
      )
    )
  );
};

Header.propTypes = headerPropTypes;

exports.default = Header;

//# sourceMappingURL=Header.js.map