/**
 *
 * @export
 * @interface IUser
 * ---
 * Generic IUser object
 */
export interface IUser {
	uid: string,
	username: string,
	token_version: number,
	is_verified: boolean
}

/**
 *
 * @export
 * @interface INewMessage
 * ---
 * New Message Type
 */
export interface INewMessage {
	to: string,
	from: string,
	content: string,
	sent: Date
}