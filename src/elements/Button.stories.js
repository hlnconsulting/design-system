// eslint-disable-next-line no-unused-vars
import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { Button } from './Button';

export default {
    title: 'Elements|Button',
    component: Button,
    decorators: [withKnobs]
};

export const buttons = () => (
    <>
        <Button
            appearance="primary"
            disabled={boolean(`Disabled`, false)}
            loading={boolean(`Loading`, false)}
        >
            Primary
        </Button>
        <Button
            appearance="secondary"
            disabled={boolean(`Disabled`, false)}
            loading={boolean(`Loading`, false)}
        >
            Secondary
        </Button>
        <Button
            appearance="tertiary"
            disabled={boolean(`Disabled`, false)}
            loading={boolean(`Loading`, false)}
        >
            Tertiary
        </Button>
        <br />
        <br />
        <Button
            appearance="primary"
            disabled={boolean(`Disabled`, false)}
            icon={`healing`}
            loading={boolean(`Loading`, false)}
        >
            Tertiary with Icon
        </Button>
        <Button
            appearance="tertiary"
            disabled={boolean(`Disabled`, false)}
            icon={`healing`}
            loading={boolean(`Loading`, false)}
        >
            Tertiary with Icon
        </Button>
    </>
);

buttons.story = {
    name: 'Raised'
};

export const textButtons = () => (
    <>
        <Button
            appearance="primary"
            disabled={boolean(`Disabled`, false)}
            loading={boolean(`Loading`, false)}
            text
        >
            Primary
        </Button>
        <Button
            appearance="secondary"
            disabled={boolean(`Disabled`, false)}
            loading={boolean(`Loading`, false)}
            text
        >
            Secondary
        </Button>
        <Button
            appearance="tertiary"
            disabled={boolean(`Disabled`, false)}
            loading={boolean(`Loading`, false)}
            text
        >
            Tertiary
        </Button>
    </>
);

textButtons.story = {
    name: 'Text'
};
