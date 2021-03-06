// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Input } from './Input';

const TextInputOptions = {
    size: ['sm', 'md', 'lg'],
    sizeRatio: {
        sm: 0.83,
        md: 1,
        lg: 1.17
    },
    type: ['text', 'tel', 'email', 'password', 'url', 'number']
};

const TextInput = styled(
    ({ multiline, readOnly, size, valueAlign, ...rest }) => <input {...rest} />
)`
    flex-grow: 1;
    flex-basis: 100%;
    background: transparent;
    border: none;
    border-radius: 3px;
    box-sizing: border-box;
    color: ${(props) => props.theme.colors.text.default};
    font-family: ${(props) => props.theme.typography.fonts.ui};
    font-size: ${(props) => TextInputOptions.sizeRatio[props.size] * 1.066}rem;
    font-weight: 400;
    line-height: ${(props) =>
        props.multiline
            ? `${(props) => TextInputOptions.sizeRatio[props.size] * 1.6}rem`
            : `${(props) => TextInputOptions.sizeRatio[props.size] * 1.1}rem`};
    padding: 0.667rem 0.84rem;
    text-align: ${(props) => props.valueAlign || `left`};
    :focus {
        outline: none;
    }
    :hover {
        cursor: ${(props) =>
            props.disabled && !props.readOnly ? `not-allowed` : `text`};
    }
`;

export const TextField = ({
    disabled,
    error,
    inputProps,
    multiline,
    prefix,
    readOnly,
    suffix,
    ...props
}) => {
    const a11yProps = {};
    const inputPropsRemapped = {
        disabled: disabled,
        error: error,
        readOnly: readOnly,
        ...inputProps,
        prefix,
        suffix
    };

    return (
        <Input {...inputPropsRemapped}>
            <TextInput
                as={multiline ? 'textarea' : 'input'}
                disabled={disabled || readOnly}
                readOnly={readOnly}
                {...a11yProps}
                {...props}
            />
        </Input>
    );
};

TextField.propTypes = {
    /**
     * Enables browser autocomplete, or if you are feeling nice to your users,
     * allows for a [variety of string options](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete#Values)
     * to provide context to the browser, password managers, etc.
     */
    autoComplete: PropTypes.string,
    disabled: PropTypes.bool,
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
    id: PropTypes.string.isRequired,
    /**
     * If desired, an object of parameters to be spread over the `<Input />`
     * element.
     */
    inputProps: PropTypes.object,
    /**
     * Enables display and functionality of `<textarea />` input.
     */
    multiline: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    prefix: PropTypes.node,
    readOnly: PropTypes.bool,
    size: PropTypes.oneOf([...TextInputOptions.size]),
    suffix: PropTypes.node,
    /**
     * Sets the supported input type; useful for responsive interfaces.
     */
    type: PropTypes.oneOf([...TextInputOptions.type]).isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    /**
     * Sets the text-align of the value within the input wrapper.
     */
    valueAlign: PropTypes.string
};

TextField.defaultProps = {
    autoComplete: 'on',
    disabled: false,
    error: false,
    inputProps: {},
    multiline: false,
    onChange: () => null,
    readOnly: false,
    size: 'md',
    type: 'text',
    valueAlign: 'left'
};
