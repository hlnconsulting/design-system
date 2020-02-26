import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Text } from './';

export default {
    title: 'Elements|Typography',
    component: Text,
    parameters: {
        componentSubtitle: `Simple text element, similar to HTML's span.`
    },
    decorators: [withKnobs]
};

const previewDatum = [
    { size: 600, semantic: 'span' },
    { size: 500, semantic: 'span' },
    { size: 400, semantic: 'span' },
    { size: 300, semantic: 'span' }
];

const previewTextComponent = (
    Component,
    innerChild,
    previewProps = previewDatum,
    keyIdx = 'size'
) =>
    previewProps.map((datum) => (
        <Component
            {...datum}
            key={datum[keyIdx]}
            style={{ display: 'block', margin: '0 0 0.66rem 0' }}
            color={datum.color === null ? undefined : datum.color}
            font={datum.font === null ? undefined : datum.font}
        >
            ({keyIdx}: {datum[keyIdx]}) {innerChild}
        </Component>
    ));

export const typoText = () => {
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

    return previewTextComponent(
        Text,
        text(
            `Text`,
            `These are the voyages of the starship Enterprise. Its continuing mission: to explore strange new worlds... `
        ),
        finalizedDatum,
        'size'
    );
};

typoText.story = {
    name: 'Text (span)'
};
