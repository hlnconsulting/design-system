// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    background: ${(props) => props.theme.colors.background.default};
    border: 1px solid ${(props) => props.theme.colors.border.muted};
    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: 0 2px 0 ${(props) => props.theme.colors.neutral.N1A};
    overflow: visible;
    margin: 0;
    padding: 0;
    position: relative;
    width: 100%;
`;

export const Input = ({ children, ...props }) => {
    return <InputWrapper {...props}>{children}</InputWrapper>;
};

Input.propTypes = {
    children: PropTypes.node.isRequired
};

Input.defaultProps = {};
