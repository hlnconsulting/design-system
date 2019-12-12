// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Dialog } from './Dialog';
import { DialogBody } from './../elements/DialogBody';
import { DialogFooter } from './../elements/DialogFooter';
import { DialogHeader } from './../elements/DialogHeader';

export default {
    title: 'Components|Dialog',
    component: Dialog
};

export const dialog = () => {
    const CloseDialog = () => null;

    return (
        <div style={{ height: `30rem` }}>
            <Dialog close={CloseDialog} visible>
                <DialogHeader close={CloseDialog}>Hello there.</DialogHeader>
                <DialogBody>
                    <p>
                        I&apos;m a dialog. You can put whatever kind of content
                        you&apos;d like into me.
                    </p>
                </DialogBody>
                <DialogFooter></DialogFooter>
            </Dialog>
        </div>
    );
};

dialog.story = {
    name: 'Overview'
};
