import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Text } from './../';
import { Link } from './';

storiesOf('Typography|Link', module)
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
            <Text>
                To learn more about the HLN Design System, you can{' '}
                <Link
                    href={text(
                        `URL`,
                        `https://github.com/hlnconsulting/design-system`
                    )}
                    target="_blank"
                    underline={boolean(`Underline`, true)}
                    {...controlledProps}
                >
                    {text(`Text`, `check out the repo`)}
                </Link>
                &nbsp;for information on documentation.
            </Text>
        );
    });
