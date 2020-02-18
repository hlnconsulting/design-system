// eslint-disable-next-line no-unused-vars
import React from 'react';

import ErrorBoundary from './ErrorBoundary';
import { ForceErrorBoundary } from './../elements/ForceErrorBoundary';

export default {
    title: 'Components|Utilities/Error Boundary',
    component: ErrorBoundary
};

export const field = () => (
    <ErrorBoundary>
        <ForceErrorBoundary />
    </ErrorBoundary>
);

field.story = {
    name: 'Overview'
};
