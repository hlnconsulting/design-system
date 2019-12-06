// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Input } from './Input';

const TextInputOptions = {
    type: ['text', 'tel', 'email', 'password', 'url']
};

const TextInput = styled(({ multiline, ...rest }) => <input {...rest} />)`
    flex-grow: 1;
    flex-basis: 100%;
    background: transparent;
    border: none;
    border-radius: 3px;
    box-sizing: border-box;
    color: ${(props) => props.theme.colors.text.default};
    font-family: ${(props) => props.theme.typography.fonts.ui};
    font-size: 1.066rem;
    font-weight: 500;
    line-height: ${(props) => (props.multiline ? `1.6rem` : `1.1rem`)};
    padding: 0.667rem;
    :focus {
        outline: none;
    }
`;

export const TextField = ({ inputProps, multiline, ...props }) => {
    const a11yProps = {};

    return (
        <Input {...inputProps}>
            <TextInput
                as={multiline ? 'textarea' : 'input'}
                {...a11yProps}
                {...props}
            />
        </Input>
    );
};

TextField.propTypes = {
    autoComplete: PropTypes.string,
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    inputProps: PropTypes.object,
    multiline: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    type: PropTypes.oneOf([...TextInputOptions.type]).isRequired,
    value: PropTypes.string
};

TextField.defaultProps = {
    autoComplete: 'on',
    disabled: false,
    inputProps: {},
    multiline: false,
    onChange: () => null,
    type: 'text'
};
