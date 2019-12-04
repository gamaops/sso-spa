import React from 'react';
import { ReactWrapper, mount } from 'enzyme';

import Grant, { GrantProperties } from 'src/components/Molecules/Grant';

describe(
  'Grant',
  () => {
    let wrapper: ReactWrapper<GrantProperties, {}, Grant>;

    beforeEach(
      () => {
        window.grecaptcha = { execute() {}, render() {} } as any;
        wrapper = mount(
          <div>
            <Grant  />
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
