'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Button = Button;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(props) {
    return _react2.default.createElement(
        'button',
        null,
        props.children
    );
}