import 'src/App/App.scss';
import React from 'react';
import Api from 'src/services/api';
import { Accounts } from 'src/services/accounts';

import Sign from 'src/components/Molecules/Sign';
import Grant from 'src/components/Molecules/Grant';
import Choose from 'src/components/Molecules/Choose';

export default class App extends React.Component<{}, { view: string }> {
	public view: string = '';
	public views: { [key: string]: any } = {
		Sign,
		Grant,
		Choose,
	}
	public methods: { [key: string]: any } = {
		Sign(model: any) {
			Api.authenticate(model)
				.then(response => response.json())
				.then(Accounts.add);
		},
		Grant(model: any) {
			Api.authenticate(model)
				.then(response => response.json())
				.then(Accounts.add);
		},
		Choose(subject: any) {
			Accounts.current = subject;
			window.location.reload();
		}
	}

	public showChoose(): boolean {
		return Accounts.all.length > 1 && Accounts.last === Accounts.current;
	}

	public showGrant(): boolean {
		const element = document.querySelector('meta[name="oauth2:grant_nonce"]');
		return (element !== null && element.getAttribute('content')) !== '';
	}

	public showSignIn(): boolean {
		const element = document.querySelector('meta[name="oauth2:require_sign_in"]');
		return (element !== null && element.getAttribute('content')) === 'true';
	}

	public loadView(): string {

		switch (true) {
			case this.showChoose(): 
				return 'Choose';

			case this.showSignIn():
				return 'Sign';

			case this.showGrant():
				return 'Grant';
		
			default:
				return '';
		}
	}

	public render() {
		this.view = this.loadView();
		const Tag = this.views[this.view];
		return <Tag onSubmit={(e: any) => this.methods[this.view](e)} />;
	}
};
