import 'src/components/Molecules/Sign/Sign.scss';
import React from 'react';

import { Credentials } from 'src/models/credentials';

import Recaptcha from 'src/components/Atoms/Recaptcha';
import PasswordInput from 'src/components/Atoms/PasswordInput';
import IdentifierInput from 'src/components/Atoms/IndetifierInput';

export interface SignProperties { 
	onSubmit: Function 
};

export default class Sign extends React.Component<SignProperties, Credentials> {

	public identifier: React.RefObject<IdentifierInput>;

	constructor(props: any) {
		super(props);
		this.state = {} as Credentials;
		this.submit = this.submit.bind(this);
		this.identifier = React.createRef<IdentifierInput>();
	}

	public componentDidUpdate() {
		this.state.recaptcha_response && this.send();
  }

	public componentDidMount() {
		this.identifier.current && 
		this.identifier.current.input.current &&
		this.identifier.current.input.current.focus();
	}

	public send() {
		const { onSubmit } = this.props;
		onSubmit(this.state);
	}
	
	public submit(e: React.FormEvent) {
		window.grecaptcha.execute();
		e.preventDefault();
	}

	render() {
		return [
			<header className="container" key="header">
				<h1 className="text title">Entrar</h1>
				<p className="text paragraph">Prossegir para <a href="http://">savesafe.com</a></p>
			</header>,
			<main className="container" key="body">
				<form onSubmit={this.submit}>

					<IdentifierInput
						ref={this.identifier}
						value={this.state.identifier}
						onChange={identifier => this.setState({ identifier } as Credentials)} />

					<PasswordInput
						value={this.state.password}
						onChange={password => this.setState({ password } as Credentials)} />

					<Recaptcha
						id="submit"
						sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
						onChange={recaptcha_response => this.setState({ recaptcha_response } as Credentials)} />

					<button className="color--blue style--default">Confirmar</button>
				</form>
			</main>
		];
	}
};