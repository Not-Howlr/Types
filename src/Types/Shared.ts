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