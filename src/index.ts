import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from '@source/component/app';

const MOUNT_PLACE_ID = 'content';

ReactDOM.render(
    React.createElement(App),
    document.getElementById(MOUNT_PLACE_ID),
);
