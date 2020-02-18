import React from 'react';
import { withKnobs, boolean, number, radios } from '@storybook/addon-knobs';

import { Avatar } from './Avatar';
import { AvatarGroup } from './AvatarGroup';

export default {
    component: AvatarGroup,
    subcomponents: { Avatar },
    decorators: [withKnobs],
    title: 'Components|Avatar Group',
    parameters: {
        componentSubtitle: 'Render a group of user avatars'
    }
};

export const avatarGroup = () => (
    <AvatarGroup
        maxLength={number(`Truncate Length`, 5, {
            range: true,
            min: 1,
            max: 9,
            step: 1
        })}
        size={number(`Avatar Size (px)`, 48, {
            range: true,
            min: 32,
            max: 256,
            step: 16
        })}
        type={radios(
            `Type`,
            {
                Circle: 'Circle',
                Square: 'Square'
            },
            'Circle'
        )}
        stroke={boolean(`Stroke`, true)}
        strokeWidth={number(`Stroke Width`, 3, {
            range: true,
            min: 1,
            max: 5,
            step: 1
        })}
        users={[
            {
                hash: `user_a`,
                name: `User A`,
                src: ``
            },
            {
                hash: `user_b`,
                name: `User B`,
                src: `https://www.gravatar.com/avatar/591c6999d16cceb20895fa38c50eef3a`
            },
            {
                hash: `user_c`,
                name: `User C`,
                src: ``
            },
            {
                hash: `user_d`,
                name: `User D`,
                src: `https://www.gravatar.com/avatar/5701bc76685597e44a27b28d1732912f`
            },
            {
                hash: `user_e`,
                name: `User E`,
                src: ``
            },
            {
                hash: `user_f`,
                name: `User F`,
                src: ``
            }
        ]}
    />
);

avatarGroup.story = {
    name: 'Overview'
};
