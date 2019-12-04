import { Credentials } from 'src/models/credentials';
import { Accord } from 'src/models/accord';

export default class Api {
	private static readonly baseUrl = '/sign-in';


	public static authenticate(credentials: Credentials) {
		const url = `${this.baseUrl}/authenticate`;
		const body = JSON.stringify(credentials);

		return fetch(url, { method: 'POST', body });
	}

	public static authorize(accord: Accord) {
		const url = `${this.baseUrl}/authorize`;
		const body = JSON.stringify(accord);

		return fetch(url, { method: 'POST', body });
	}

	public static activate() {
		
	}
}