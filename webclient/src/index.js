import React, { setGlobal } from 'reactn';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

// Set an initial global state
setGlobal({
    user: null,
    accessToken: null,
    refreshToken: null
});

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
