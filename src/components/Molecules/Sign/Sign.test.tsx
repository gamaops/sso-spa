import React from 'react';
import ReactDOM from 'react-dom';
import Sign from 'src/components/Molecules/Sign';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sign onSubmit={()=> {}} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
