// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import * as Sentry from '@sentry/browser';

import FeedbackCard from './FeedbackCard';

/**
 * For more information on how to use error boundary compnenets with React,
 * please refer to the [official documentation](https://reactjs.org/docs/error-boundaries.html).
 */

class ErrorBoundary extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null
            // sentryEventId: null
        };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error,
            errorInfo
        });
        /*
        if (this.props.reportToSentry) {
            Sentry.withScope((scope) => {
                scope.setExtras(errorInfo);
                const sentryEventId = Sentry.captureException(error);
                this.setState({ sentryEventId });
            });
        }
        */
    }

    render() {
        const { error, errorInfo, hasError } = this.state;

        if (hasError) {
            return (
                <FeedbackCard
                    details={{
                        msg: error,
                        ...errorInfo
                    }}
                    feedback={{
                        heading: `An error has occurred.`,
                        message: `Please wait a few moments before trying your request
                again.`
                    }}
                    intent="danger"
                />
            );
        }

        return this.props.children;
    }

    static propTypes = {
        children: PropTypes.node.isRequired
        // reportToSentry: PropTypes.bool
    };

    static defaultProps = {
        // reportToSentry: true
    };
}

export default ErrorBoundary;
