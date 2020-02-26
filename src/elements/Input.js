// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { borderRadius, lighten } from 'polished';

const InputContainer = styled(({ ...rest }) => <div {...rest} />)`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    width: 100%;
`;

// eslint-disable-next-line handle-callback-err
const InputWrapper = styled(({ disabled, error, readOnly, ...rest }) => (
    <div {...rest} />
))`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    background: ${(props) =>
        props.disabled
            ? props.theme.colors.background.tint
            : props.theme.colors.background.default};
    border: 1px solid
        ${(props) =>
            props.readOnly
                ? `transparent`
                : props.error
                ? props.theme.colors.intent.danger
                : props.theme.colors.border.muted};
    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: 0 2px 0
        ${(props) =>
            props.readOnly
                ? `transparent`
                : props.error
                ? lighten(0.33, props.theme.colors.intent.danger)
                : props.theme.colors.neutral.N1A};
    overflow: visible;
    margin: 0;
    padding: 0;
    position: relative;
`;

const InputPrefixSuffix = styled(({ ...rest }) => <div {...rest} />)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
    background: ${(props) => props.theme.colors.background.tint};
    border-right: 1px solid ${(props) => props.theme.colors.border.muted};
    ${borderRadius('left', '3px')}
    box-sizing: border-box;
    box-shadow: 2px 0 0 ${(props) => props.theme.colors.neutral.N1A};
    color: ${(props) => props.theme.colors.text.default};
    font-family: ${(props) => props.theme.typography.fonts.ui};
    font-size: 1rem;
    font-weight: 400;
    overflow: visible;
    padding: 0 1.1337rem;
`;

const InputErrorText = styled(({ ...rest }) => <p {...rest} />)`
    color: ${(props) => props.theme.colors.intent.danger};
    font-family: ${(props) => props.theme.typography.fonts.ui};
    font-size: 0.8rem;
    font-weight: 400;
    margin: 0.33rem 0;
`;

/**
 * To maintain a consistent visual experience, most input components are
 * "wrapped" with the `<Input />` component, which provides a standardized
 * presentation of an input component where logical to do so.
 *
 * Extend the display of your form fields by using some of the baked-in
 * utilities, such as including error display, "pre/suff-ix" component
 * insertion, and read-only formatting.
 */

export const Input = ({ children, error, prefix, suffix, ...props }) => {
    return (
        <InputContainer>
            <InputWrapper error={!!error} {...props}>
                {prefix && <InputPrefixSuffix>{prefix}</InputPrefixSuffix>}
                {children}
                {suffix && <InputPrefixSuffix>{suffix}</InputPrefixSuffix>}
            </InputWrapper>
            {(typeof error === 'string' || typeof error === 'object') && (
                <InputErrorText>{error?.body || error}</InputErrorText>
            )}
        </InputContainer>
    );
};

Input.propTypes = {
    children: PropTypes.node.isRequired,
    /**
     * **Please note,** that this is typically set at the `<FormField />`
     * level, and not on this lower level element component.
     *
     * There are three ways to indicate a field error: by bassing a boolean
     * value to render the label with red text, and add a red outline to
     * the input field (if applicable); by passing a string to be displayed
     * underneath the field; or by passing an object with a `body:` parameter
     * for the message to be displayed.
     *
     * We recommend for greatest forward flexibility, using the object option
     * where possible, as future extensibility of error status rendering will
     * be controlled through additional object parameters.
     *
     * ```javascript
     * {
     *   body: ``,
     * }
     * ```
     */
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
        PropTypes.string
    ]),
    /**
     * A component to display _before_ the child input component.
     */
    prefix: PropTypes.node,
    /**
     * Render simply the provided value as a string of text (`<span />`).
     */
    readOnly: PropTypes.bool,
    /**
     * A component to display _after_ the child input component.
     */
    suffix: PropTypes.node
};

Input.defaultProps = {
    error: false,
    readOnly: false
};
