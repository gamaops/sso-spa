import React from 'react';
import { ReactWrapper, mount } from 'enzyme';

import IndetifierInput, { IdentifierInputProperties, IdentifierInputState } from 'src/components/Atoms/IndetifierInput';

describe(
  'IndetifierInput',
  () => {
		let wrapper: ReactWrapper<IdentifierInputProperties, IdentifierInputState, IndetifierInput>;
		let spys: { [name: string]: jest.Mock };
		let props: IdentifierInputProperties;
    
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
            <IndetifierInput value={props.value} onChange={props.onChange} />
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
				expect(label.htmlFor).toEqual('identifier');
				expect(input.autoComplete).toEqual('on');
				expect(input.name).toEqual('identifier');
				expect(input.id).toEqual('identifier');
				expect(input.type).toEqual('email');
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
