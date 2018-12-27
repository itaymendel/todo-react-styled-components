'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fa = require('react-icons/fa');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var checkoutPropTypes = {
  isCompleted: _propTypes2.default.bool.isRequired
};

var Checkout = function Checkout(props) {
  return _react2.default.createElement(
    'span',
    null,
    props.isCompleted ? _react2.default.createElement(_fa.FaCheckSquare, { size: '30' }) : _react2.default.createElement(_fa.FaSquare, { size: '30' })
  );
};

Checkout.propTypes = checkoutPropTypes;

exports.default = Checkout;

//# sourceMappingURL=Checkout.js.map