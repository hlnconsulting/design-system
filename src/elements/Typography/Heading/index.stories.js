import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Heading } from './';

const previewDatum = [
    { size: 900, semantic: 'h1' },
    { size: 800, semantic: 'h2' },
    { size: 700, semantic: 'h2' },
    { size: 600, semantic: 'h2' },
    { size: 500, semantic: 'h3' },
    { size: 400, semantic: 'h4' },
    { size: 300, semantic: 'h5' },
    { size: 200, semantic: 'h6' },
    { size: 100, semantic: 'h6' }
];

const previewComponent = (
    Component,
    innerChild,
    previewProps,
    keyIdx = 'size'
) =>
    previewProps.map((datum) => (
        <Component
            {...datum}
            key={datum[keyIdx]}
            color={datum.color === null ? undefined : datum.color}
            font={datum.font === null ? undefined : datum.font}
        >
            ({keyIdx}: {datum[keyIdx]}) {innerChild}
        </Component>
    ));

storiesOf('Typography|Heading', module)
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
            Heading,
            text(`Text`, `Space: the final frontier.`),
            finalizedDatum,
            'size'
        );
    });
