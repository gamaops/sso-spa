import React from 'react';

export interface IdentifierInputProperties {
	onChange: (value: string) => any,
	value: string, 
};

export interface IdentifierInputState {
	type: 'email' | 'tel',
};

export default class IdentifierInput extends React.Component<IdentifierInputProperties, IdentifierInputState> {
	public input: React.RefObject<HTMLInputElement>;

	constructor(props: IdentifierInputProperties) {
		super(props);
		this.state = { type: 'email' };
		this.type = this.type.bind(this);
		this.changeInput = this.changeInput.bind(this);
		this.input = React.createRef<HTMLInputElement>();
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
					ref={this.input}
					type={this.state.type}
					onChange={this.changeInput} 
					value={this.props.value || ''}
					onFocus={e => e.currentTarget.classList.add('touched') } />
				<label htmlFor="identifier">Email ou Celular</label>
			</div>
		);
	}
};