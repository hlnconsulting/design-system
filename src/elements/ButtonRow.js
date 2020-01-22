// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButtonRow = styled(({ ...rest }) => <div {...rest} />)`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    button {
        border-radius: 0;
        margin: 0;
        &:first-of-type {
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
        }
        &:last-of-type {
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
        }
    }
`;

export const ButtonRow = ({ children, ...props }) => {
    const a11yProps = {};

    return (
        <StyledButtonRow {...a11yProps} {...props}>
            {children}
        </StyledButtonRow>
    );
};

ButtonRow.propTypes = {
    children: PropTypes.node.isRequired
};

ButtonRow.defaultProps = {};
