import Cookies from 'js-cookie';
import { Account } from 'src/models/account';
import { Session } from 'src/models/session';

const key = 'session';
export const Accounts = {
	set current(value: Account) {
		Cookies.set('SSO_SUB', value);
	},
	get current(): Account {
		return Cookies.getJSON('SSO_SUB');
	},
	get all(): Array<Session> {
		const data = atob(localStorage.getItem(key) || '') || '[]';
		const sessions: Array<Session> = JSON.parse(data);
		return sessions;
	},
	add({ name, subject, activated }: Account): void {
		const sessions = Accounts.all;
		sessions.push({ name, subject, activated });
		localStorage.setItem(key, btoa(JSON.stringify(sessions)));
	}
};