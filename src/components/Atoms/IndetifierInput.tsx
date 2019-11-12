import React from 'react';

export default class IdentifierInput extends React.Component<{ value: string, onChange: (value: string) => any }, { type: 'email' | 'tel' }> {

	constructor(props: any) {
		super(props);
		this.changeInput = this.changeInput.bind(this);
		this.type = this.type.bind(this);
		this.state = { type: 'email' };
	}

	public changeInput(e: React.ChangeEvent<HTMLInputElement>) {
		const value = e.currentTarget.value.replace(/\s+/g, '');
		const type = this.type(value);
		this.validate(e.currentTarget); 
		this.props.onChange(value);
		this.setState({ type });
		e.preventDefault();
	}

	public validate(input: HTMLInputElement) {
		input.classList[input.value.length ? 'add': 'remove']('dirty');
		switch (true) {
			case input.value.length === 0:
				input.setCustomValidity('Preencha seu email ou celular');
				break;
		
			case input.type === 'email' && input.validity.typeMismatch:
				input.setCustomValidity('Email inválido');
				break;
			
			case input.type === 'tel' && input.value.length < 11:
				input.setCustomValidity('Celular inválido');
				break;

			default:
				input.setCustomValidity('');
				break;
		}
	}

	public type(value: any): 'email' | 'tel' {
		return isNaN(value) ? 'email':'tel';
	}

	public render() {
		return (
			<div>
				<input
					id="identifier"
					name="identifier"
					autoComplete="on"
					type={this.state.type}
					onChange={this.changeInput} 
					onFocus={e => e.currentTarget.classList.add('touched') } />
				<label htmlFor="identifier">Email ou Celular</label>
			</div>
		);
	}
};