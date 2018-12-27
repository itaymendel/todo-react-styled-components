'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _templateObject = _taggedTemplateLiteral(['\n  margin-right: 0.5em;\n'], ['\n  margin-right: 0.5em;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  width: 100%;\n  margin-bottom: 0.5em;\n'], ['\n  width: 100%;\n  margin-bottom: 0.5em;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fa = require('react-icons/fa');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var FirstButton = _styledComponents2.default.button(_templateObject);

var FormEditComponent = _styledComponents2.default.li(_templateObject2);

var FormEdit = (_temp = _class = function (_Component) {
  _inherits(FormEdit, _Component);

  function FormEdit(props) {
    _classCallCheck(this, FormEdit);

    var _this = _possibleConstructorReturn(this, (FormEdit.__proto__ || Object.getPrototypeOf(FormEdit)).call(this, props));

    _this.componentDidMount = function () {
      return window.addEventListener('keyup', _this.handleKeyUp);
    };

    _this.handleKeyUp = function (ev) {
      // Handle ESC Key interaction
      if (ev.code === 'Escape') {
        _this.props.handleCancelEditItem(ev);
      }
    };

    _this.handleItemChange = function (ev) {
      return _this.setState({
        itemValue: ev.target.value
      });
    };

    _this.handleEditAndResetForm = function (ev) {
      ev.preventDefault();
      _this.props.handleEditItem(Object.assign({}, _this.props.item, {
        value: _this.state.itemValue
      }));

      // Reset value
      return _this.setState({ itemValue: '' });
    };

    _this.state = {
      itemValue: props.item.value
    };
    return _this;
  }

  _createClass(FormEdit, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        FormEditComponent,
        { className: 'list-group-item' },
        _react2.default.createElement(
          'form',
          { method: 'POST', onSubmit: this.handleEditAndResetForm },
          _react2.default.createElement(
            'div',
            { className: 'form-row' },
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement('input', {
                type: 'text',
                className: 'form-control',
                id: 'input-edit-todo-item',
                name: 'edit-todo-item',
                value: this.state.itemValue,
                onChange: this.handleItemChange,
                autoFocus: true
              })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-auto' },
              _react2.default.createElement(
                FirstButton,
                {
                  type: 'submit',
                  id: 'submit-edit-todo-item',
                  className: 'btn btn-primary',
                  disabled: !this.state.itemValue },
                _react2.default.createElement(_fa.FaCheck, null)
              ),
              _react2.default.createElement(
                'button',
                {
                  id: 'cancel-edit-todo-item',
                  type: 'button',
                  className: 'btn btn-danger',
                  onClick: this.props.handleCancelEditItem },
                _react2.default.createElement(_fa.FaTimes, null)
              )
            )
          )
        )
      );
    }
  }]);

  return FormEdit;
}(_react.Component), _class.propTypes = {
  item: _propTypes2.default.shape({
    value: _propTypes2.default.string.isRequired,
    id: _propTypes2.default.string.isRequired,
    completed: _propTypes2.default.bool.isRequired
  }),
  handleEditItem: _propTypes2.default.func.isRequired,
  handleCancelEditItem: _propTypes2.default.func.isRequired
}, _temp);
exports.default = FormEdit;

//# sourceMappingURL=FormEdit.js.map