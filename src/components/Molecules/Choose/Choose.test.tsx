import React from 'react';
import { ReactWrapper, mount } from 'enzyme';

import Choose, { ChooseProperties } from 'src/components/Molecules/Choose';

describe(
  'Choose',
  () => {
    let wrapper: ReactWrapper<ChooseProperties, {}, Choose>;
    
    beforeEach(
      () => {
        wrapper = mount(
          <div>
            <Choose  />
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
