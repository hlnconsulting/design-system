// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken, lighten } from 'polished';

import { MaterialIcon } from './../elements/MaterialIcon';

const ErrorCard = styled(({ intent, ...rest }) => <div {...rest} />)`
    background-color: ${(props) => props.theme.colors.background.default};
    border: 1px solid ${(props) => props.theme.colors.border.default};
    border-left: none;
    border-radius: 3px;
    box-shadow: 0 2px 0 ${(props) => props.theme.colors.neutral.N1A},
        inset 3px 0 0 ${(props) => props.theme.colors.intent[props.intent]};
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
        margin: 0 0 0 3px;
    }
`;

const DetailsCollapseControl = styled(({ ...rest }) => <button {...rest} />)`
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

const DetailsOutput = styled(({ collapsed, intent, ...rest }) => (
    <pre {...rest} />
))`
    display: ${(props) => (!props.collapsed ? `block` : `none`)};
    visibility: ${(props) => (!props.collapsed ? `visible` : `hidden`)};
    background-color: ${(props) =>
        lighten(0.33, props.theme.colors.intent[props.intent])};
    color: ${(props) => darken(0.33, props.theme.colors.intent[props.intent])};
    line-height: 1.337rem;
    margin: 0;
    overflow-wrap: break-word;
    padding: 1.337rem;
    white-space: pre-wrap;
    word-break: break-all;
`;

class FeedbackCard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            collapseDetails: true
        };
    }

    toggleCollapseDetails = (e) =>
        this.setState({
            collapseDetails: !this.state.collapseDetails
        });

    render() {
        const { details, feedback, intent, ...rest } = this.props;
        const { collapseDetails } = this.state;

        return (
            <ErrorCard intent={intent} {...rest}>
                {typeof feedback?.heading === 'string' && (
                    <h3>{feedback.heading}</h3>
                )}
                {typeof feedback?.message === 'string' && (
                    <p>{feedback.message}</p>
                )}
                {!!details && (
                    <section>
                        <DetailsCollapseControl
                            onClick={this.toggleCollapseDetails}
                        >
                            <span>Show Details Information</span>
                            <MaterialIcon
                                icon={
                                    collapseDetails
                                        ? `arrow_drop_down`
                                        : `arrow_drop_up`
                                }
                            />
                        </DetailsCollapseControl>
                        <DetailsOutput
                            collapsed={collapseDetails}
                            intent={intent}
                        >
                            {JSON.stringify(details, null, 2)}
                        </DetailsOutput>
                    </section>
                )}
            </ErrorCard>
        );
    }
}

FeedbackCard.propTypes = {
    details: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    /**
     * An object that defines the text to render as part of the feedback card.
     * Both options are optional, and we recommend following the Material Design
     * recommendations for [describing purpose](https://material.io/components/dialogs/#anatomy)
     * when defining feedback card messages.
     *
     * For example:
     *
     * ```javascript
     * {
     *   heading: ``,
     *   message: ``
     * }
     * ```
     */
    feedback: PropTypes.object.isRequired,
    /**
     * Defines which color band to use, and if `details` has a value, the
     * background color used when the card is expanded.
     */
    intent: PropTypes.oneOf(['success', 'info', 'warning', 'danger']).isRequired
};

FeedbackCard.defaultProps = {
    intent: `info`
};

export default FeedbackCard;
