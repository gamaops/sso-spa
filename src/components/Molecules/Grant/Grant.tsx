import 'src/components/Molecules/Grant/Grant.scss';
import React from 'react';

import { Accounts } from 'src/services/accounts';
import { Accord } from 'src/models/accord';

export interface GrantProperties { 
	onSubmit: (grant: Accord) => void 
};

export default class Grant extends React.Component<GrantProperties> {
	public submit(e: React.MouseEvent<HTMLButtonElement>, granted: boolean) {
		const { subject, nonce, props: { onSubmit } } = this;
		onSubmit({ subject, nonce, granted });
		e.preventDefault();
	}

	public get client(): string {
		const element = document.querySelector('meta[name="oauth2:client"]');
		return (element && element.getAttribute('content')) || 'No named app';
	}

	public get scopes(): Array<string> {
		const element = document.querySelector('meta[name="oauth2:scopes"]');
		const content = element && element.getAttribute('content');
		return (content && content.split(' ')) || [];
	}

	public get nonce(): string {
		const element = document.querySelector('meta[name="oauth2:grant_nonce"]');
		return (element && element.getAttribute('content')) || '';
	}

	public get subject(): string {
		return Accounts.current;
	}

	render() {
		return [
			<header className="container" key="header">
				<h1 className="text title">Autorizar</h1>
				<p className="text paragraph">Conceder acesso para à aplicação <a href="http://">{this.client}</a>:</p>
			</header>,
			<main className="container" key="body">
				<ul>
					{this.scopes.map(scope => <li key={scope}>{scope}</li>)}
				</ul>
			</main>,
			<footer className="container" key="footer">
				<button
					className="color--white style--default"
					onClick={e => this.submit(e, false)}
				>
					Cancelar
				</button>
				<button
					className="color--blue style--default"
					onClick={e => this.submit(e, true)}
				>
					Confirmar
				</button>
			</footer>
		];
	}
};