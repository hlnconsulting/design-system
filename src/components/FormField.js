// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormFieldWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: stretch;
    margin: 1rem 0;
`;

const FieldLabelWrapper = styled.label`
    display: flex;
    flex-direction: column;
    flex-basis: 25%;
    margin: 0.667rem 1.667rem 0.667rem 0;
    text-align: right;
`;

// eslint-disable-next-line handle-callback-err
const FieldLabel = styled(({ error, ...rest }) => <span {...rest} />)`
    color: ${(props) =>
        props.error
            ? props.theme.colors.intent.danger
            : props.theme.colors.text.default};
    font-family: ${(props) => props.theme.typography.fonts.ui};
    font-size: 1.066rem;
    font-weight: 500;
`;

const FieldSubtext = styled.span`
    color: ${(props) => props.theme.colors.text.muted};
    font-family: ${(props) => props.theme.typography.fonts.ui};
    font-size: 0.8rem;
    font-weight: 400;
`;

const FormFieldFullBasis = styled(({ ...rest }) => <div {...rest} />)`
    display: flex;
    flex-basis: 75%;
`;

const FormFieldFlexBlock = styled(({ basis, width, ...rest }) => (
    <div {...rest} />
))`
    flex-basis: ${(props) => props.basis || 100}%;
    max-width: ${(props) => `${props.width}rem` || `auto`};
`;

const RenderFormElementWithProps = (children, props) =>
    React.Children.map(children, (child) =>
        React.cloneElement(child, { ...props })
    );

/**
 * In most cases, user input fields come in groups; FormField attempts to
 * present a standardized approach to visually arrange these inputs, as well as
 * to expose some baked-in utility functionality, such as setting a field to
 * readOnly to render only the current value, to accept a standardized error
 * message, and to ensure a baseline implementation of accessibility best
 * practices.
 */

export const FormField = ({
    basis,
    children,
    error,
    label,
    labelFor,
    subtext,
    width,
    ...props
}) => {
    const a11yProps = {
        htmlFor: labelFor
    };

    return (
        <FormFieldWrapper {...props}>
            <FieldLabelWrapper>
                {label && (
                    <FieldLabel error={!!error} {...a11yProps}>
                        {label}
                    </FieldLabel>
                )}
                {subtext && <FieldSubtext>{subtext}</FieldSubtext>}
            </FieldLabelWrapper>
            <FormFieldFullBasis>
                <FormFieldFlexBlock basis={basis} width={width}>
                    {RenderFormElementWithProps(children, {
                        error: error,
                        ...props
                    })}
                </FormFieldFlexBlock>
            </FormFieldFullBasis>
        </FormFieldWrapper>
    );
};

FormField.propTypes = {
    /**
     * If set, applies a `flex-basis` value to the inset field wrapper.
     *
     * This is recommended for forms where responsively sized fields are
     * appropriate.
     */
    basis: PropTypes.number,
    /**
     * _Reserved for future use_; to indicate if a value has changed since last
     * save action.
     */
    changed: PropTypes.bool,
    /**
     * The input component to be rendered.
     */
    children: PropTypes.node.isRequired,
    /**
     * There are three ways to indicate a field error: by bassing a boolean
     * value to render the label with red text, and add a red outline to
     * the input field (if applicable); by passing a string to be displayed
     * underneath the field; or by passing an object with a `body:` parameter
     * for the message to be displayed.
     *
     * We recommend for greatest forward flexibility, using the object option
     * where possible, as future extensibility of error status rendering will
     * be controlled through additional object parameters.
     */
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
        PropTypes.string
    ]),
    /**
     * The label component to be rendered.
     *
     * Alternatively, can simply pass a string to have default formatting
     * applied.
     */
    label: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
     * For accessibility purposes; should match the DOM element ID of the
     * child input component.
     */
    labelFor: PropTypes.string.isRequired,
    /**
     * Passed through to the child input component. Used to display a
     * `readOnly` value where supported.
     */
    readOnly: PropTypes.bool,
    /**
     * Display a message underneath the label, in a smaller font size than the
     * default label component.
     */
    subtext: PropTypes.node,
    /**
     * If set, applies a `flex-basis` value to the inset field wrapper.
     *
     * This is recommended for forms where responsively sized fields are
     * appropriate.
     */
    width: PropTypes.number
};

FormField.defaultProps = {
    changed: false,
    error: false,
    readOnly: false
};
