// eslint-disable-next-line no-unused-vars
import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { Button } from './../elements/Button';
import { Dialog } from './Dialog';
import { DialogBody } from './../elements/DialogBody';
import { DialogFooter } from './../elements/DialogFooter';
import { DialogHeader } from './../elements/DialogHeader';

export default {
    title: 'Components|Dialog',
    component: Dialog,
    decorators: [withKnobs]
};

export const dialog = () => {
    const CloseDialog = () => null;

    return (
        <div style={{ height: `30rem` }}>
            <Dialog
                close={CloseDialog}
                visible
                size={select(
                    `Size`,
                    {
                        Small: `sm`,
                        Medium: `md`,
                        Large: `lg`,
                        Unset: null
                    },
                    `md`
                )}
            >
                <DialogHeader close={CloseDialog}>Hello there.</DialogHeader>
                <DialogBody>
                    <p style={{ margin: `1.33rem 0 0 0` }}>
                        I&apos;m a dialog. You can put whatever kind of content
                        you&apos;d like into me.
                    </p>
                </DialogBody>
                <DialogFooter>
                    <Button appearance="secondary" text>
                        Cancel
                    </Button>
                    <Button appearance="primary" text>
                        General Kenobi
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
};

dialog.story = {
    name: 'Overview'
};
