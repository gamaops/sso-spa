import React from 'react';

export default class PasswordInput extends React.Component<{ value: string, onChange: (value: string) => any }> {

	constructor(props: any) {
		super(props);
		this.changeInput = this.changeInput.bind(this);
	}

	public changeInput(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.currentTarget.value;
		this.validade(e.currentTarget); 
		this.props.onChange(value);
		e.preventDefault();
	}

	public validade(input: HTMLInputElement) {
		switch (true) {
			case input.value.length === 0:
				input.setCustomValidity('Preencha sua senha');
				break;
		
			default:
				input.setCustomValidity('');
				break;
		}
	}

	render() {
		return (
			<div>
				<input
					id="password"
					name="password"
					type="password"
					autoComplete="on"
					onChange={this.changeInput} 
					onFocus={e => e.currentTarget.classList.add('touched') }  />
				<label htmlFor="password">Senha</label>
				{this.props.children}
			</div>
		);
	}
};