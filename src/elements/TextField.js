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
    type: ['text', 'tel', 'email', 'password', 'url']
};

const TextInput = styled(({ multiline, size, valueAlign, ...rest }) => (
    <input {...rest} />
))`
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
        cursor: ${(props) => (props.disabled ? `not-allowed` : `text`)};
    }
`;

export const TextField = ({
    disabled,
    error,
    inputProps,
    multiline,
    prefix,
    suffix,
    ...props
}) => {
    const a11yProps = {};
    const inputPropsRemapped = {
        disabled: disabled,
        error: error,
        ...inputProps,
        ...prefix,
        ...suffix
    };

    return (
        <Input {...inputPropsRemapped}>
            <TextInput
                as={multiline ? 'textarea' : 'input'}
                disabled={disabled}
                {...a11yProps}
                {...props}
            />
        </Input>
    );
};

TextField.propTypes = {
    autoComplete: PropTypes.string,
    disabled: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
        PropTypes.string
    ]),
    id: PropTypes.string.isRequired,
    inputProps: PropTypes.object,
    multiline: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    prefix: PropTypes.node,
    size: PropTypes.oneOf([...TextInputOptions.size]),
    suffix: PropTypes.node,
    type: PropTypes.oneOf([...TextInputOptions.type]).isRequired,
    value: PropTypes.string,
    valueAlign: PropTypes.string
};

TextField.defaultProps = {
    autoComplete: 'on',
    disabled: false,
    error: false,
    inputProps: {},
    multiline: false,
    onChange: () => null,
    size: 'md',
    type: 'text',
    valueAlign: 'left'
};
