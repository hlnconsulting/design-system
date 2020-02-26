import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Text } from './../Text';
import { Strong } from './';

export default {
    title: 'Elements|Typography',
    component: Strong,
    parameters: {
        componentSubtitle: `Simple text element, similar to HTML's strong.`
    },
    decorators: [withKnobs]
};

export const typoStrong = () => {
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
        <Text {...controlledProps}>
            <Strong {...controlledProps}>
                {text(`Strong Text`, `Seize the time... Live now!`)}
            </Strong>{' '}
            Make now always the most precious time. Now will never come again.
        </Text>
    );
};

typoStrong.story = {
    name: 'Strong'
};
