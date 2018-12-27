'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  position: absolute;\n  right: 1em;\n  top: 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  height: 100%;\n'], ['\n  position: absolute;\n  right: 1em;\n  top: 0;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-end;\n  height: 100%;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-right: 0.5em;\n  opacity: 0.1;\n  transition: opacity 0.25s ease-in-out;\n\n  &:hover {\n    opacity: 1;\n    transition: opacity 0.25s ease-in-out;\n  }\n'], ['\n  margin-right: 0.5em;\n  opacity: 0.1;\n  transition: opacity 0.25s ease-in-out;\n\n  &:hover {\n    opacity: 1;\n    transition: opacity 0.25s ease-in-out;\n  }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fa = require('react-icons/fa');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Component = _styledComponents2.default.div(_templateObject);

var Button = _styledComponents2.default.button(_templateObject2);

var propertyBarPropTypes = {
  id: _propTypes2.default.string.isRequired,
  handleSelectEditItem: _propTypes2.default.func.isRequired,
  handleDeleteItem: _propTypes2.default.func.isRequired
};

var PropertyBar = function PropertyBar(props) {
  return _react2.default.createElement(
    Component,
    null,
    _react2.default.createElement(
      Button,
      {
        className: 'btn btn-secondary',
        onClick: function onClick() {
          return props.handleSelectEditItem(props.id);
        } },
      _react2.default.createElement(_fa.FaEdit, { size: '20' })
    ),
    _react2.default.createElement(
      Button,
      {
        className: 'btn btn-danger',
        onClick: function onClick() {
          return props.handleDeleteItem(props.id);
        } },
      _react2.default.createElement(_fa.FaTrash, { size: '20' })
    )
  );
};

PropertyBar.propTypes = propertyBarPropTypes;

exports.default = PropertyBar;

//# sourceMappingURL=PropertyBar.js.map