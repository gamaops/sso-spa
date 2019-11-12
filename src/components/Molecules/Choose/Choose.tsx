import React from 'react';
import 'src/components/Molecules/Choose/Choose.scss';

export default class Choose extends React.Component {
	render() {
		return (
			<div>
				<header>
					<h1>Escolha uma conta</h1>
					<p>Prossegir para <a href="http://">savesafe.com</a></p>
				</header>
				<main>
					<ul>
						<li>
							<button>

							</button>
						</li>

						<li>
							<button>Usar outra conta</button>
						</li>
					</ul>
				</main>
			</div>
		);
	}
};
