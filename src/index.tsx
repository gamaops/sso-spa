import 'src/styles/index.scss';
import 'unfetch/polyfill';
import React from 'react';
import { hydrate, render } from 'react-dom';

import App from 'src/App';

const rootElement = document.getElementById('app');

rootElement && rootElement.hasChildNodes() ? 
	hydrate(<App />, rootElement) : render(<App />, rootElement);
