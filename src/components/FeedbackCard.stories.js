// eslint-disable-next-line no-unused-vars
import React from 'react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';

import FeedbackCard from './FeedbackCard';

export default {
    title: 'Components|Feedback/Card',
    component: FeedbackCard,
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
