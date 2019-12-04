// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Input } from './Input';

const TextInputOptions = {
    type: ['text', 'tel', 'email', 'password', 'url']
};

const TextInput = styled.input``;

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
