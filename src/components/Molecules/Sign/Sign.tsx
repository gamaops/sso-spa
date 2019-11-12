import 'src/components/Molecules/Sign/Sign.scss';
import React from 'react';

import { Credentials } from 'src/models/credentials';

import Recaptcha from 'src/components/Atoms/Recaptcha';
import PasswordInput from 'src/components/Atoms/PasswordInput';
import IndentifierInput from 'src/components/Atoms/IndetifierInput';

declare var grecaptcha: any;

export default class Sign extends React.Component<{ onSubmit: Function }, Credentials> {
	constructor(props: any) {
		super(props);
		this.state = {} as Credentials;
		this.submit = this.submit.bind(this);
	}

	public submit(e: React.FormEvent) {
		const { onSubmit } = this.props;
		onSubmit(this.state);
		e.preventDefault();
	}

	render() {
		return [
			<header key="header">
				<h1>Entrar</h1>
				<p>Prossegir para <a href="http://">savesafe.com</a></p>
			</header>,
			<main key="body">
				<form onSubmit={this.submit}>

					<IndentifierInput
						value={this.state.identifier}
						onChange={identifier => this.setState({ identifier } as Credentials)} />

					<PasswordInput
						value={this.state.password}
						onChange={password => this.setState({ password } as Credentials)}>
						<a href="http://">?</a>
					</PasswordInput>

					<Recaptcha
						id="submit"
						sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
						onChange={recaptcha_response => this.setState({ recaptcha_response } as Credentials)} />

					<button>Confirmar</button>
				</form>
			</main>
		];
	}
};