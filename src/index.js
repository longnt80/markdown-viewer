import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Viewer from './components/Viewer';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Viewer />, document.getElementById('root'));
registerServiceWorker();
