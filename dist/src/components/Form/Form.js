Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = undefined;

var _createClass = (function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
})();

var _class, _temp2;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _fa = require('react-icons/fa');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function');
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return call && (typeof call === 'object' || typeof call === 'function') ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, enumerable: false, writable: true, configurable: true },
  });
  if (superClass)
    Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : (subClass.__proto__ = superClass);
}

var Form = ((_temp2 = _class = (function(_Component) {
  _inherits(Form, _Component);

  function Form() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Form);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        (_ref = Form.__proto__ || Object.getPrototypeOf(Form)).call.apply(_ref, [this].concat(args)),
      )),
      _this)),
      (_this.state = { itemValue: '' }),
      (_this.handleSubmitAndResetForm = function(ev) {
        ev.preventDefault();

        _this.props.handleAddItem(_this.state.itemValue);

        // Reset value
        return _this.setState({
          itemValue: '',
        });
      }),
      (_this.handleItemChange = function(ev) {
        return _this.setState({
          itemValue: ev.target.value,
        });
      }),
      _temp)),
      _possibleConstructorReturn(_this, _ret)
    );
  }

  _createClass(Form, [
    {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'form',
            { method: 'POST', onSubmit: this.handleSubmitAndResetForm },
            _react2.default.createElement(
              'div',
              { className: 'form-row' },
              _react2.default.createElement(
                'div',
                { className: 'col' },
                _react2.default.createElement('input', {
                  type: 'text',
                  className: 'form-control',
                  id: 'new-todo-item',
                  name: 'new-todo-item',
                  placeholder: 'I want to do...',
                  'aria-label': 'Todo item description',
                  value: this.state.itemValue,
                  onChange: this.handleItemChange,
                  autoFocus: true,
                }),
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-auto' },
                _react2.default.createElement(
                  'button',
                  {
                    type: 'submit',
                    className: 'btn btn-primary',
                    disabled: !this.state.itemValue,
                    'aria-label': 'Add todo item',
                  },
                  _react2.default.createElement(_fa.FaPlus, null),
                ),
              ),
            ),
          ),
        );
      },
    },
  ]);

  return Form;
})(_react.Component)),
(_class.propTypes = {
  handleAddItem: _propTypes2.default.func.isRequired,
}),
_temp2);
exports.default = Form;

//# sourceMappingURL=Form.js.map
