// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Button } from './Button';
import { Dialog } from './../components/Dialog';
import { DialogBody } from './DialogBody';
import { DialogFooter } from './DialogFooter';

const CloseDialog = () => null;

export default {
    title: 'Elements|Dialog/Dialog Footer',
    component: DialogFooter,
    parameters: {
        componentSubtitle: `Define a series of actions/buttons to be rendered as part of a Dialog.`
    }
};

export const dialogFooter = () => (
    <div style={{ height: `30rem` }}>
        <Dialog close={CloseDialog} id={`storybook_dialog_footer_00`} visible>
            <DialogBody />
            <DialogFooter>
                <Button appearance="secondary" text>
                    Cancel
                </Button>
                <Button appearance="primary" text>
                    Continue
                </Button>
            </DialogFooter>
        </Dialog>
    </div>
);

dialogFooter.story = {
    name: 'Default'
};

export const dialogFooterStacked = () => (
    <div style={{ height: `30rem` }}>
        <Dialog close={CloseDialog} id={`storybook_dialog_footer_01`} visible>
            <DialogBody />
            <DialogFooter stacked>
                <Button appearance="secondary" text>
                    Cancel
                </Button>
                <Button appearance="primary" text>
                    Continue
                </Button>
            </DialogFooter>
        </Dialog>
    </div>
);

dialogFooterStacked.story = {
    name: 'Stacked Actions'
};
