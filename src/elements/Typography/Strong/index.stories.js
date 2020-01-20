import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Paragraph } from './../';
import { Strong } from './';

storiesOf('Typography|Strong', module)
    .addDecorator(withKnobs)
    .add('Default', () => {
        let colorOptions = [
            'default',
            'muted',
            'dark',
            'selected',
            'success',
            'info',
            'danger',
            'warning'
        ];

        let availableColors = {};
        colorOptions.map((c, i) => (availableColors[c] = c));

        let controlledProps = {
            color: select(
                `Color`,
                {
                    '(undefined)': 'default',
                    ...availableColors
                },
                'default'
            ),
            font: select(
                `Font Family`,
                {
                    '(undefined)': 'ui',
                    Display: 'display',
                    'Text (UI)': 'ui',
                    Monospace: 'mono'
                },
                'ui'
            )
        };

        return (
            <Paragraph {...controlledProps}>
                <Strong {...controlledProps}>
                    {text(`Text`, `Seize the time... Live now!`)}
                </Strong>{' '}
                Make now always the most precious time. Now will never come
                again.
            </Paragraph>
        );
    });
