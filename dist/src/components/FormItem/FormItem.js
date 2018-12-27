'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _templateObject = _taggedTemplateLiteral(['\n  width: 100%;\n  height: 100%;\n  position: relative;\n  cursor: pointer;\n  margin-bottom: 0.5em;\n'], ['\n  width: 100%;\n  height: 100%;\n  position: relative;\n  cursor: pointer;\n  margin-bottom: 0.5em;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  margin-right: 0.5em;\n  height: 100%;\n'], ['\n  margin-right: 0.5em;\n  height: 100%;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _PropertyBar = require('../PropertyBar/PropertyBar');

var _PropertyBar2 = _interopRequireDefault(_PropertyBar);

var _Checkout = require('../Checkout/Checkout');

var _Checkout2 = _interopRequireDefault(_Checkout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FormItemStyle = _styledComponents2.default.li(_templateObject);

var CheckoutStyle = _styledComponents2.default.div(_templateObject2);

var FormItem = (_temp2 = _class = function (_Component) {
  _inherits(FormItem, _Component);

  function FormItem() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FormItem);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FormItem.__proto__ || Object.getPrototypeOf(FormItem)).call.apply(_ref, [this].concat(args))), _this), _this.state = { displayMenu: false }, _this.setDisplayMenu = function (bool) {
      if (_this.state.displayMenu !== bool) {
        _this.setState({ displayMenu: bool });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(FormItem, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        FormItemStyle,
        {
          className: 'list-group-item form-control',
          onMouseMove: function onMouseMove() {
            return _this2.setDisplayMenu(true);
          },
          onMouseLeave: function onMouseLeave() {
            return _this2.setDisplayMenu(false);
          } },
        _react2.default.createElement(
          'div',
          { className: 'text-truncate', onClick: function onClick() {
              return _this2.props.handleItemCompletion(_this2.props.item);
            } },
          _react2.default.createElement(
            CheckoutStyle,
            { className: 'd-inline-block' },
            _react2.default.createElement(_Checkout2.default, { isCompleted: this.props.item.completed })
          ),
          _react2.default.createElement(
            'span',
            null,
            this.props.item.value
          )
        ),
        this.state.displayMenu ? _react2.default.createElement(_PropertyBar2.default, {
          id: this.props.item.id,
          handleSelectEditItem: this.props.handleSelectEditItem,
          handleDeleteItem: this.props.handleDeleteItem
        }) : null
      );
    }
  }]);

  return FormItem;
}(_react.Component), _class.propTypes = {
  item: _propTypes2.default.shape({
    value: _propTypes2.default.string.isRequired,
    id: _propTypes2.default.string.isRequired,
    completed: _propTypes2.default.bool.isRequired
  }),
  handleDeleteItem: _propTypes2.default.func.isRequired,
  handleSelectEditItem: _propTypes2.default.func.isRequired,
  handleItemCompletion: _propTypes2.default.func.isRequired
}, _temp2);
exports.default = FormItem;

//# sourceMappingURL=FormItem.js.map