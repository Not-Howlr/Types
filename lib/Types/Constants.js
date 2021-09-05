"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientHandler = exports.ServerHandler = void 0;
/**
 * Websocket Server Handler Enum
 *
 * @export
 * @enum {number}
 */
var ServerHandler;
(function (ServerHandler) {
    ServerHandler["CONNECTION"] = "connection";
    ServerHandler["ERROR"] = "error";
    ServerHandler["SEND_MESSAGE"] = "send_message";
    ServerHandler["RESPONSE"] = "response";
    ServerHandler["RECIEVE_MESSAGE"] = "recieve_message";
})(ServerHandler = exports.ServerHandler || (exports.ServerHandler = {}));
/**
 * Websocket Client Handler Enum
 *
 * @export
 * @enum {number}
 */
var ClientHandler;
(function (ClientHandler) {
    ClientHandler["CONNECT"] = "connect";
    ClientHandler["DISCONNECT"] = "disconnect";
})(ClientHandler = exports.ClientHandler || (exports.ClientHandler = {}));
//# sourceMappingURL=Constants.js.map