// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Dialog } from './Dialog';

export default {
    title: 'Components|Dialog',
    component: Dialog
};

export const dialog = () => {
    return (
        <div style={{ height: `30rem` }}>
            <Dialog visible />
        </div>
    );
};

dialog.story = {
    name: 'Overview'
};
