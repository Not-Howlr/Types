"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HandlerTypes = void 0;
/**
 * Websocket Handler Enum
 *
 * @export
 * @enum {number}
 */
var HandlerTypes;
(function (HandlerTypes) {
    HandlerTypes["CONNECION"] = "connection";
    HandlerTypes["ERROR"] = "error";
    HandlerTypes["RESPONSE"] = "response";
    HandlerTypes["SEND_MESSAGE"] = "send_message";
    HandlerTypes["RECIEVE_MESSAGE"] = "recieve_message";
})(HandlerTypes = exports.HandlerTypes || (exports.HandlerTypes = {}));
//# sourceMappingURL=Constants.js.map