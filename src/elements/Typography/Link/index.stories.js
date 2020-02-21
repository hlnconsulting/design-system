import React from 'react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import { Text } from './../';
import { Link } from './';

export default {
    title: 'Elements|Typography',
    component: Link,
    parameters: {
        componentSubtitle: `Simple link element, similar to HTML's a.`
    },
    decorators: [withKnobs]
};

export const typoLink = () => {
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
            `Link Color`,
            {
                '(undefined)': 'default',
                ...availableColors
            },
            'default'
        ),
        font: select(
            `Link Font Family`,
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
                    `Link URL`,
                    `https://github.com/hlnconsulting/design-system`
                )}
                target="_blank"
                underline={boolean(`Underline`, true)}
                {...controlledProps}
            >
                {text(`Link Text`, `check out the repo`)}
            </Link>
            &nbsp;for information on documentation.
        </Text>
    );
};

typoLink.story = {
    name: 'Link (a)'
};
