import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { App } from './features/app';

const MOUNT_PLACE_ID = 'content';

import { store } from './store';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById(MOUNT_PLACE_ID),
);
