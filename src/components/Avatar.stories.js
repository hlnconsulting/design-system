import React from 'react';
import {
    withKnobs,
    boolean,
    number,
    radios,
    text
} from '@storybook/addon-knobs';

import { Avatar } from './Avatar';

export default {
    title: 'Components|Avatar',
    component: Avatar,
    decorators: [withKnobs]
};

export const avatar = () => (
    <Avatar
        name={text(`User's Name`, `Data, Lt. Cdr.`)}
        src={text(
            `Source (URI)`,
            `https://secure.gravatar.com/avatar/5701bc76685597e44a27b28d1732912f?s=256`
        )}
        size={number(`Avatar Size (px)`, 128, {
            range: true,
            min: 32,
            max: 256,
            step: 16
        })}
        hash={text(`Hash`, `BCEaGSYENDU0cGQ0yOqmrBi7nSV2`)}
        type={radios(
            `Type`,
            {
                Circle: 'Circle',
                Square: 'Square'
            },
            'Circle'
        )}
    />
);

avatar.story = {
    name: 'Overview'
};

export const avatarFallback = () => (
    <Avatar
        name={text(`User's Name`, `Data, Lt. Cdr.`)}
        src={text(`Source (URI)`, ``)}
        size={number(`Avatar Size (px)`, 128, {
            range: true,
            min: 32,
            max: 256,
            step: 16
        })}
        hash={text(`Hash`, `BCEaGSYENDU0cGQ0yOqmrBi7nSV2`)}
        solid={boolean(`Solid?`, false)}
        type={radios(
            `Type`,
            {
                Circle: 'Circle',
                Square: 'Square'
            },
            'Circle'
        )}
    />
);

avatarFallback.story = {
    name: 'Fallback'
};
