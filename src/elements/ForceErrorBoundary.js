// eslint-disable-next-line no-unused-vars
import React from 'react';

export const ForceErrorBoundary = ({ ...props }) => {
    throw new Error(
        'A fatal exception as occurred. Do NOT use this element in production.'
    );
    // eslint-disable-next-line no-unreachable
    return (
        <div {...props}>
            <span>Error</span>
        </div>
    );
};
