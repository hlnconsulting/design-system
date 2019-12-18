// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken, lighten } from 'polished';
// import * as Sentry from '@sentry/browser';

import { MaterialIcon } from './../elements/MaterialIcon';

const ErrorCard = styled(({ ...rest }) => <div {...rest} />)`
    background-color: ${(props) => props.theme.colors.background.default};
    border: 1px solid ${(props) => props.theme.colors.border.default};
    border-left: none;
    border-radius: 3px;
    box-shadow: 0 2px 0 ${(props) => props.theme.colors.neutral.N1A},
        inset 2px 0 0 ${(props) => props.theme.colors.intent.warning};
    display: flex;
    flex-direction: column;
    margin: 2.25rem;

    h3 {
        color: ${(props) => props.theme.colors.text.default};
        font-family: ${(props) => props.theme.typography.fonts.ui};
        font-size: 1.1rem;
        font-weight: 600;
        margin: 1.337rem 1.337rem 0 1.337rem;
        padding: 0;
    }

    p {
        color: ${(props) => props.theme.colors.text.muted};
        font-family: ${(props) => props.theme.typography.fonts.ui};
        font-size: 0.9rem;
        font-weight: 400;
        margin: 0.337rem 1.337rem 1.337rem 1.337rem;
        padding: 0;
    }

    section {
        margin: 0 0 0 2px;
    }
`;

const DiagnosticsCollapseControl = styled(({ ...rest }) => (
    <button {...rest} />
))`
    background-color: ${(props) => props.theme.colors.background.tint};
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    color: ${(props) => props.theme.colors.text.default};
    font-family: ${(props) => props.theme.typography.fonts.ui};
    font-size: 0.8rem;
    font-weight: 400;
    padding: 0.667rem 1.337rem;
    width: 100%;
`;

const DiagnosticsOutput = styled(({ collapsed, ...rest }) => <pre {...rest} />)`
    display: ${(props) => (!props.collapsed ? `block` : `none`)};
    visibility: ${(props) => (!props.collapsed ? `visible` : `hidden`)};
    background-color: ${(props) =>
        lighten(0.33, props.theme.colors.intent.warning)};
    color: ${(props) => darken(0.33, props.theme.colors.intent.warning)};
    line-height: 1.337rem;
    margin: 0;
    overflow-wrap: break-word;
    padding: 1.337rem;
    white-space: pre-wrap;
    word-break: break-all;
`;

class ErrorBoundary extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            collapseErrorDetails: true,
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

    toggleCollapsedErrorDiagnostics = (e) =>
        this.setState({
            collapseErrorDetails: !this.state.collapseErrorDetails
        });

    render() {
        const { error, errorInfo, hasError, collapseErrorDetails } = this.state;

        if (hasError) {
            return (
                <ErrorCard>
                    <h3>An error has occurred.</h3>
                    <p>
                        Please wait a few moments before trying your request
                        again.
                    </p>
                    <section>
                        <DiagnosticsCollapseControl
                            onClick={this.toggleCollapsedErrorDiagnostics}
                        >
                            <span>Show Diagnostic Information</span>
                            <MaterialIcon
                                icon={
                                    collapseErrorDetails
                                        ? `arrow_drop_down`
                                        : `arrow_drop_up`
                                }
                            />
                        </DiagnosticsCollapseControl>
                        <DiagnosticsOutput collapsed={collapseErrorDetails}>
                            {JSON.stringify(
                                {
                                    msg: error,
                                    ...errorInfo
                                },
                                null,
                                2
                            )}
                        </DiagnosticsOutput>
                    </section>
                </ErrorCard>
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
