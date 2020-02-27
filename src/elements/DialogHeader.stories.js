// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Dialog } from './../components/Dialog';
import { DialogBody } from './DialogBody';
import { DialogHeader } from './DialogHeader';

const CloseDialog = () => null;

export default {
    title: 'Elements|Dialog/Dialog Header',
    component: DialogHeader,
    parameters: {
        componentSubtitle: `Render a title, and perhaps a close button.`
    }
};

export const header = () => (
    <div style={{ height: `30rem` }}>
        <Dialog close={CloseDialog} id={`storybook_dialog_header_00`} visible>
            <DialogHeader close={() => null}>Header with Close</DialogHeader>
            <DialogBody />
        </Dialog>
    </div>
);

header.story = {
    name: 'Default'
};

export const headerWithoutClose = () => (
    <div style={{ height: `30rem` }}>
        <Dialog close={CloseDialog} id={`storybook_dialog_header_01`} visible>
            <DialogHeader>Header without Close</DialogHeader>
            <DialogBody />
        </Dialog>
    </div>
);

headerWithoutClose.story = {
    name: 'Without Close'
};
