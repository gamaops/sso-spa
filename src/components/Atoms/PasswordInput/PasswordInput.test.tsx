import React from 'react';
import { ReactWrapper, mount } from 'enzyme';

import PasswordInput, { PasswordInputProperties } from 'src/components/Atoms/PasswordInput';

describe(
	'PasswordInput',
	() => {
		let wrapper: ReactWrapper<PasswordInputProperties, {}, PasswordInput>;
		let spys: { [name: string]: jest.Mock };
		let props: PasswordInputProperties;

		beforeEach(
			() => {
				spys = {
					onChange: jest.fn(),
				};

				props = {
					value: Date.now().toString(),
					onChange() {
						spys.onChange();
					},
				};

				wrapper = mount(
					<div>
						<PasswordInput value={props.value} onChange={props.onChange} />
					</div>
				);
			},
		)


		it(
			'renders without crashing',
			() => {
				expect(wrapper.exists()).toBeTruthy();
			}
		);

		it(
			'has correct attributes',
			() => {
				const input = wrapper.find('input').props();
				const label = wrapper.find('label').props();
				expect(label.htmlFor).toEqual('password');
				expect(input.autoComplete).toEqual('on');
				expect(input.name).toEqual('password');
				expect(input.type).toEqual('password');
				expect(input.id).toEqual('password');
			}
		);

		it(
			'initiate with correct value',
			() => {
				expect(wrapper.find('input').props().value).toEqual(props.value);
			}
		);
	},
);
