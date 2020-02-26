import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Heading } from './';

export default {
    title: 'Elements|Typography',
    component: Heading,
    parameters: {
        componentSubtitle: `Simple heading element, similar to HTML's h1-6.`
    },
    decorators: [withKnobs]
};

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

const previewHeadingComponent = (
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

export const typoHeading = () => {
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
            `Heading Color`,
            {
                '(undefined)': null,
                ...availableColors
            },
            null
        ),
        font: select(
            `Heading Font Family`,
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

    return previewHeadingComponent(
        Heading,
        text(`Heading Text`, `Space: the final frontier.`),
        finalizedDatum,
        'size'
    );
};

typoHeading.story = {
    name: 'Heading (h1-6)'
};
