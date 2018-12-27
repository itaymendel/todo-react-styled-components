'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _enzyme = require('enzyme');

var _reactFontawesome = require('@fortawesome/react-fontawesome');

var _freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');

var _Checkout = require('./Checkout');

var _Checkout2 = _interopRequireDefault(_Checkout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Checkout', function () {
  it('renders a checkmark icon when received prop is true', function () {
    var completed = true;

    var component = (0, _enzyme.mount)(_react2.default.createElement(_Checkout2.default, { isCompleted: completed }));

    expect(component.find(_reactFontawesome.FontAwesomeIcon).props().icon).toBe(_freeSolidSvgIcons.faCheckSquare);
  });

  it('renders a square icon when received prop is false', function () {
    var completed = false;

    var component = (0, _enzyme.mount)(_react2.default.createElement(_Checkout2.default, { isCompleted: completed }));

    expect(component.find(_reactFontawesome.FontAwesomeIcon).props().icon).toBe(_freeSolidSvgIcons.faSquare);
  });
});

//# sourceMappingURL=Checkout.test.js.map