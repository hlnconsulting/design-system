// eslint-disable-next-line no-unused-vars
import React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import FeedbackCard from './FeedbackCard';

export default {
    title: 'Components|FeedbackCard',
    component: FeedbackCard,
    parameters: {
        componentSubtitle: `Convey important information to users, without interrupting the normal layout or user flow.`
    },
    decorators: [withKnobs]
};

export const field = () => {
    const details = boolean(`Show Details?`, true);

    return (
        <FeedbackCard
            details={
                details
                    ? {
                          code: 503,
                          status: `Internal Server Error`
                      }
                    : undefined
            }
            feedback={{
                heading: `An error has occurred.`,
                message: `Please wait a few moments before trying your request
again.`
            }}
            intent={select(
                `Intent`,
                {
                    Error: `danger`,
                    Warning: `warning`,
                    Success: `success`,
                    Info: `info`
                },
                `warning`
            )}
        />
    );
};

field.story = {
    name: 'Overview'
};

export const noDetails = () => {
    return (
        <FeedbackCard
            feedback={{
                heading: `Success!`,
                message: `That entry was updated.`
            }}
            intent={`success`}
        />
    );
};

noDetails.story = {
    name: 'Success, no details'
};
