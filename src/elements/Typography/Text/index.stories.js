import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Text } from './';

const previewDatum = [
    { size: 600, semantic: 'span' },
    { size: 500, semantic: 'span' },
    { size: 400, semantic: 'span' },
    { size: 300, semantic: 'span' }
];

const previewComponent = (
    Component,
    innerChild,
    previewProps = previewDatum,
    keyIdx = 'size'
) =>
    previewProps.map((datum) => (
        <Component
            {...datum}
            key={datum[keyIdx]}
            style={{ display: 'block' }}
            color={datum.color === null ? undefined : datum.color}
            font={datum.font === null ? undefined : datum.font}
        >
            ({keyIdx}: {datum[keyIdx]}) {innerChild}
        </Component>
    ));

storiesOf('Typography|Text', module)
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
                    '(undefined)': null,
                    ...availableColors
                },
                null
            ),
            font: select(
                `Font Family`,
                {
                    '(undefined)': null,
                    Display: 'display',
                    'Text (UI)': 'ui',
                    Monospace: 'mono'
                },
                null
            )
        };

        let finalizedDatum = previewDatum.map((p, i) => {
            return {
                ...p,
                ...controlledProps
            };
        });

        return previewComponent(
            Text,
            text(
                `Text`,
                `These are the voyages of the starship Enterprise. Its continuing mission: to explore strange new worlds... `
            ),
            finalizedDatum,
            'size'
        );
    });
