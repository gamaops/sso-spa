import React from 'react';
import ReactDOM from 'react-dom';
import Choose from 'src/components/Molecules/Choose';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Choose />, div);
  ReactDOM.unmountComponentAtNode(div);
});
