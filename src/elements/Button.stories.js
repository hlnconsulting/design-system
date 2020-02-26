// eslint-disable-next-line no-unused-vars
import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { Button } from './Button';

export default {
    title: 'Elements|Button',
    component: Button,
    parameters: {
        componentSubtitle: `Things your users press.`
    },
    decorators: [withKnobs]
};

export const buttons = () => (
    <>
        <Button
            appearance="primary"
            disabled={boolean(`Disabled`, false)}
            loading={boolean(`Loading`, false)}
        >
            I&apos;m a Primary raised button...
        </Button>
        <br />
        <br />
        <Button
            appearance="tertiary"
            disabled={boolean(`Disabled`, false)}
            icon={`healing`}
            loading={boolean(`Loading`, false)}
            text
        >
            And I&apos;m a Tertiary text button with an icon!
        </Button>
    </>
);

export const raisedButtons = () => (
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
            Primary with Icon
        </Button>
        <Button
            appearance="secondary"
            disabled={boolean(`Disabled`, false)}
            icon={`healing`}
            loading={boolean(`Loading`, false)}
        >
            Secondary with Icon
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

raisedButtons.story = {
    name: 'Raised Buttons'
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
        <br />
        <br />
        <Button
            appearance="primary"
            disabled={boolean(`Disabled`, false)}
            icon={`healing`}
            loading={boolean(`Loading`, false)}
            text
        >
            Primary with Icon
        </Button>
        <Button
            appearance="secondary"
            disabled={boolean(`Disabled`, false)}
            icon={`healing`}
            loading={boolean(`Loading`, false)}
            text
        >
            Secondary with Icon
        </Button>
        <Button
            appearance="tertiary"
            disabled={boolean(`Disabled`, false)}
            icon={`healing`}
            loading={boolean(`Loading`, false)}
            text
        >
            Tertiary with Icon
        </Button>
    </>
);

textButtons.story = {
    name: 'Text Buttons'
};
