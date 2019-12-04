import React from 'react';
import { ReactWrapper, mount } from 'enzyme';

import Sign, { SignProperties } from 'src/components/Molecules/Sign';
import { Credentials } from 'src/models/credentials';

describe(
  'Sign',
  () => {
    let wrapper: ReactWrapper<SignProperties, Credentials, Sign>;

    beforeEach(
      () => {
        window.grecaptcha = { execute() { }, render() { } } as any;
        wrapper = mount(
          <div>
            <Sign />
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
