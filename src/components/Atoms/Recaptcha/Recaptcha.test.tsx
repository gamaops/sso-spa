import React from 'react';
import { ReactWrapper, mount } from 'enzyme';

import Recaptcha, { RecaptchaProperties } from 'src/components/Atoms/Recaptcha';

describe(
  'Recaptcha',
  () => {
    let wrapper: ReactWrapper<RecaptchaProperties, {}, Recaptcha>;
		let spys: { [name: string]: jest.Mock };
		let props: RecaptchaProperties;
    
    beforeEach(
      () => {
				spys = {
					onChange: jest.fn(),
					grecaptchaRender:  jest.fn(),
				};

				props = {
					id: Date.now().toString(),
					sitekey: Date.now().toString(),
					onChange(recaptcha_response: string) {
						spys.onChange(recaptcha_response);
					},
				};

				window.grecaptcha = { 
					render() {
						spys.grecaptchaRender(arguments);
					} 
				} as any;
				
        wrapper = mount(
          <div>
            <Recaptcha id={props.id} sitekey={props.sitekey} onChange={props.onChange} />
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

  },
);