import { Credentials } from 'src/models/credentials';

export default class Api {
	private static readonly baseUrl = '/sign-in';


	public static authenticate(credentials: Credentials) {
		const url = `${this.baseUrl}/authenticate`;
		const body = JSON.stringify(credentials);

		return fetch(url, { method: 'POST', body });
	}

	public static authorize() {
		
	}

	public static activate() {
		
	}
}