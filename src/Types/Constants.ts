/**
 * Websocket Server Handler Enum
 *
 * @export
 * @enum {number}
 */
export enum ServerHandler {
	CONNECTION = "connection",
	ERROR = "error",
	SEND_MESSAGE = "send_message",
	RESPONSE = "response",
	RECIEVE_MESSAGE = "recieve_message"
}

/**
 * Websocket Client Handler Enum
 *
 * @export
 * @enum {number}
 */
export enum ClientHandler {
	CONNECT = "connect",
	DISCONNECT = "disconnect"
}