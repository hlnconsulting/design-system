// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputWrapper = styled.div``;

export const Input = ({ children, ...props }) => {
    return <InputWrapper {...props}>{children}</InputWrapper>;
};

Input.propTypes = {
    children: PropTypes.node.isRequired
};

Input.defaultProps = {};
