'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SaveCancel = SaveCancel;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _empComponentButton = require('emp-component-button');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SaveCancel(props) {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            props.children
        ),
        _react2.default.createElement(
            _empComponentButton.Button,
            null,
            'Save'
        ),
        _react2.default.createElement(
            _empComponentButton.Button,
            null,
            'Cancel'
        )
    );
}