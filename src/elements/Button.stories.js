// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Button } from './Button';

export default {
    title: 'Elements|Button',
    component: Button
};

export const buttons = () => (
    <>
        <Button appearance="primary">Primary</Button>
        <Button appearance="secondary">Secondary</Button>
        <Button appearance="tertiary">Tertiary</Button>
    </>
);

buttons.story = {
    name: 'Raised'
};

export const textButtons = () => (
    <>
        <Button appearance="primary" text>
            Primary
        </Button>
        <Button appearance="secondary" text>
            Secondary
        </Button>
        <Button appearance="tertiary" text>
            Tertiary
        </Button>
    </>
);

textButtons.story = {
    name: 'Text'
};
