'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background: var(--background-color);\n'], ['\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n  background: var(--background-color);\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject);

var footerPropTypes = {
  className: _propTypes2.default.string.isRequired
};

var Footer = function Footer(_ref) {
  var className = _ref.className;
  return _react2.default.createElement(
    'div',
    { className: className },
    _react2.default.createElement(Container, null)
  );
};

Footer.propTypes = footerPropTypes;

exports.default = Footer;

//# sourceMappingURL=Footer.js.map