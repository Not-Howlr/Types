/**
 * Websocket Handler Enum
 *
 * @export
 * @enum {number}
 */
export enum HandlerTypes {
	CONNECION = "connection",
	ERROR = "error",
	RESPONSE = "response",
	SEND_MESSAGE = "send_message",
	RECIEVE_MESSAGE = "recieve_message",
}