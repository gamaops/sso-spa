import React from 'react';
import { ReactWrapper, mount } from 'enzyme';

import App from 'src/App';

describe(
  'App',
  () => {
    let wrapper: ReactWrapper<App>;

    beforeEach(
      () => {
        wrapper = mount(
          <div>
            <App />
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
