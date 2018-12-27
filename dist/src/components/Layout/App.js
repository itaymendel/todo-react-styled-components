Object.defineProperty(exports, '__esModule', {
  value: true,
});

var _templateObject = _taggedTemplateLiteral(
    ['\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n'],
    ['\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n'],
  ),
  _templateObject2 = _taggedTemplateLiteral(
    ['\n  flex-shrink: 0;\n  width: 100%;\n  height: 10vh;\n'],
    ['\n  flex-shrink: 0;\n  width: 100%;\n  height: 10vh;\n'],
  ),
  _templateObject3 = _taggedTemplateLiteral(
    ['\n  flex: 1 0 auto;\n  width: 100%;\n  margin-top: 1em;\n'],
    ['\n  flex: 1 0 auto;\n  width: 100%;\n  margin-top: 1em;\n'],
  );

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Header = require('../Header/Header');

var _Header2 = _interopRequireDefault(_Header);

var _Content = require('../Content/Content');

var _Content2 = _interopRequireDefault(_Content);

var _Footer = require('../Footer/Footer');

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _taggedTemplateLiteral(strings, raw) {
  return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));
}

var Container = _styledComponents2.default.div(_templateObject);

var HeaderStyled = (0, _styledComponents2.default)(_Header2.default)(_templateObject2);

var ContentStyled = (0, _styledComponents2.default)(_Content2.default)(_templateObject3);

var FooterStyled = (0, _styledComponents2.default)(_Footer2.default)(_templateObject2);

var App = function App(props) {
  return _react2.default.createElement(
    Container,
    null,
    _react2.default.createElement(HeaderStyled, null),
    _react2.default.createElement(ContentStyled, props),
    _react2.default.createElement(FooterStyled, null),
  );
};

exports.default = App;

//# sourceMappingURL=App.js.map
