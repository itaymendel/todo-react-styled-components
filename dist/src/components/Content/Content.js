'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _templateObject = _taggedTemplateLiteral(['\n  margin: 1em 0 1em 0;\n'], ['\n  margin: 1em 0 1em 0;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  opacity: 1;\n  margin-bottom: 0.5em;\n  animation: fadeIn 0.3s 1;\n  animation-fill-mode: forwards;\n'], ['\n  opacity: 1;\n  margin-bottom: 0.5em;\n  animation: fadeIn 0.3s 1;\n  animation-fill-mode: forwards;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBeautifulDnd = require('react-beautiful-dnd');

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _Form = require('../Form/Form');

var _Form2 = _interopRequireDefault(_Form);

var _FormEdit = require('../FormEdit/FormEdit');

var _FormEdit2 = _interopRequireDefault(_FormEdit);

var _FormItem = require('../FormItem/FormItem');

var _FormItem2 = _interopRequireDefault(_FormItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Todos = _styledComponents2.default.div(_templateObject);

var TodosListItem = _styledComponents2.default.div(_templateObject2);

var Content = (_temp2 = _class = function (_Component) {
  _inherits(Content, _Component);

  function Content() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Content);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Content.__proto__ || Object.getPrototypeOf(Content)).call.apply(_ref, [this].concat(args))), _this), _this.onDragEnd = function (result) {
      // dropped outside the list
      if (!result.destination) {
        return;
      }

      _this.props.handleReorderItem(result.source.index, result.destination.index);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Content, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { className: this.props.className },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'row justify-content-center' },
            _react2.default.createElement(
              'div',
              { className: 'col-12 col-md-9 col-lg-7 col-xl-6' },
              _react2.default.createElement(
                'div',
                { className: 'card text-center' },
                _react2.default.createElement(
                  'div',
                  { className: 'card-body' },
                  _react2.default.createElement(
                    'h5',
                    { className: 'card-title' },
                    'Welcome!'
                  ),
                  _react2.default.createElement(
                    'p',
                    { className: 'card-text' },
                    'To get started, add some items to your list:'
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'd-inline-block' },
                    _react2.default.createElement(_Form2.default, { handleAddItem: this.props.handleAddItem })
                  )
                )
              )
            )
          ),
          this.props.items.length ? _react2.default.createElement(
            'div',
            { className: 'row justify-content-center' },
            _react2.default.createElement(
              'div',
              { className: 'col-12 col-md-9 col-lg-7 col-xl-6' },
              _react2.default.createElement(
                Todos,
                null,
                _react2.default.createElement(
                  'ul',
                  { className: 'list-group content__todos__ul' },
                  _react2.default.createElement(
                    _reactBeautifulDnd.DragDropContext,
                    { onDragEnd: this.onDragEnd },
                    _react2.default.createElement(
                      _reactBeautifulDnd.Droppable,
                      { droppableId: 'droppable' },
                      function (provided) {
                        return _react2.default.createElement(
                          'div',
                          { ref: provided.innerRef },
                          _this2.props.items.map(function (item, index) {
                            return _react2.default.createElement(
                              _reactBeautifulDnd.Draggable,
                              { key: index, draggableId: item.id, index: index },
                              function (provided) {
                                return _react2.default.createElement(
                                  TodosListItem,
                                  Object.assign({
                                    ref: provided.innerRef
                                  }, provided.draggableProps, provided.dragHandleProps),
                                  _this2.props.editingItem.id === item.id ? _react2.default.createElement(_FormEdit2.default, {
                                    item: _this2.props.editingItem,
                                    handleEditItem: _this2.props.handleEditItem,
                                    handleCancelEditItem: _this2.props.handleCancelEditItem
                                  }) : _react2.default.createElement(_FormItem2.default, {
                                    item: item,
                                    handleDeleteItem: _this2.props.handleDeleteItem,
                                    handleSelectEditItem: _this2.props.handleSelectEditItem,
                                    handleItemCompletion: _this2.props.handleItemCompletion
                                  })
                                );
                              }
                            );
                          })
                        );
                      }
                    )
                  )
                )
              )
            )
          ) : null
        )
      );
    }
  }]);

  return Content;
}(_react.Component), _class.propTypes = {
  items: _propTypes2.default.array.isRequired,
  editingItem: _propTypes2.default.shape({
    value: _propTypes2.default.string,
    id: _propTypes2.default.string,
    completed: _propTypes2.default.bool
  }),
  className: _propTypes2.default.string.isRequired,
  handleAddItem: _propTypes2.default.func.isRequired,
  handleCancelEditItem: _propTypes2.default.func.isRequired,
  handleDeleteItem: _propTypes2.default.func.isRequired,
  handleEditItem: _propTypes2.default.func.isRequired,
  handleItemCompletion: _propTypes2.default.func.isRequired,
  handleSelectEditItem: _propTypes2.default.func.isRequired,
  handleReorderItem: _propTypes2.default.func.isRequired
}, _class.defaultProps = {
  items: [],
  editingItem: {}
}, _temp2);
exports.default = Content;

//# sourceMappingURL=Content.js.map