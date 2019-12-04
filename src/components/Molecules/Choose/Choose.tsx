import 'src/components/Molecules/Choose/Choose.scss';
import React from 'react';
import { Accounts } from 'src/services/accounts';

export interface ChooseProperties { 
	onSubmit: (subject?: string) => void 
};

export default class Choose extends React.Component<ChooseProperties> {
	public use(e: React.MouseEvent<HTMLButtonElement>, subject?: string) {
		this.props.onSubmit(subject);
		e.preventDefault();
	}
	public render() {
		return [
			<header className="container" key="header">
				<h1>Escolha uma conta</h1>
				<p>Prossegir para <a href="http://">savesafe.com</a></p>
			</header>,
			<main className="container" key="main">
				<ul>
					{
						Accounts.all
							.map(
								v => (
									<li>
										<button onClick={e => this.use(e, v.subject)}>{v.name}</button>
									</li>
								)
							)
					}
					<li>
						<button onClick={this.use}>Usar outra conta</button>
					</li>
				</ul>
			</main>
		];
	}
};
