import Cookies from 'js-cookie';
import { Account } from 'src/models/account';
import { Session } from 'src/models/session';

const key = 'SSO_SUB';
const keyLast = `${key}_LAST`;
export const Accounts = {
	set current(value: string) {
		Cookies.set(key, value);
	},
	get current(): string {
		return Cookies.get(key) || '';
	},
	get last(): string {
		const last = window.localStorage.getItem(keyLast) || '';
		window.localStorage.setItem(keyLast, Accounts.current);
		return last;
	},
	get all(): Array<Session> {
		const data = atob(window.localStorage.getItem(key) || '') || '[]';
		const sessions: Array<Session> = JSON.parse(data);
		return sessions;
	},
	add({ name, subject, activated }: Account): void {
		Accounts.current = subject;
		const sessions = Accounts.all;
		sessions.push({ name, subject, activated });
		window.localStorage.setItem(key, btoa(JSON.stringify(sessions)));
	},
	del(subject: string): void {
		let sessions = Accounts.all;
		sessions = sessions.filter(s => s.subject !== subject);
		window.localStorage.setItem(key, btoa(JSON.stringify(sessions)));
	}
};