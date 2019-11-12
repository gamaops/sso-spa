import 'src/App/App.scss';
import React from 'react';
import Api from 'src/services/api';
import Sign from 'src/components/Molecules/Sign';

export default class App extends React.Component {
	public view: string;
	public views: { [key: string]: any } = {
		Sign,
	}
	public methods: { [key: string]: any } = {
		Sign(model: any) {
			Api.authenticate(model)
				.then(
					response => response.json(),
				)
				.then(
					t => console.log(t)
				)
		},
	}

	constructor(props: any) {
		super(props);
		this.view = 'Sign';
	}

	public render() {
		const Tag = this.views[this.view];
		return <Tag onSubmit={(e: any) => this.methods[this.view](e)}/>;
	}
};
