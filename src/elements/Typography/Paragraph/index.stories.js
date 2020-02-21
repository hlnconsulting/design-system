import React from 'react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import { Paragraph } from './';

export default {
    title: 'Elements|Typography',
    component: Paragraph,
    parameters: {
        componentSubtitle: `Simple paragraph element, similar to HTML's p.`
    },
    decorators: [withKnobs]
};

const previewDatum = [
    { size: 500, semantic: 'p' },
    { size: 400, semantic: 'p' },
    { size: 300, semantic: 'p' }
];

const previewParagraphComponent = (
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

export const typoParagraph = () => {
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
            `Paragraph Color`,
            {
                '(undefined)': null,
                ...availableColors
            },
            null
        ),
        font: select(
            `Paragraph Font Family`,
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

    return previewParagraphComponent(
        Paragraph,
        text(
            `Paragraph Text`,
            `You see, he’s met two of your three criteria for sentience, so what if he meets the third. Consciousness in even the smallest degree. What is he then? I don’t know. Do you? (to Riker) Do you? (to Phillipa) Do you? Well, that’s the question you have to answer. Your Honour, the courtroom is a crucible. In it we burn away irrelevancies until we are left with a pure product, the truth for all time. Now, sooner or later, this man or others like him will succeed in replicating Commander Data. And the decision you reach here today will determine how we will regard this creation of our genius. It will reveal the kind of a people we are, what he is destined to be. It will reach far beyond this courtroom and this one android. It could significantly redefine the boundaries of personal liberty and freedom, expanding them for some, savagely curtailing them for others. Are you prepared to condemn him and all who come after him to servitude and slavery? Your Honour, Starfleet was founded to seek out new life. Well, there it sits. Waiting. You wanted a chance to make law. Well, here it is. Make a good one. `
        ),
        finalizedDatum,
        'size'
    );
};

typoParagraph.story = {
    name: 'Paragraph (p)'
};
