// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTr = styled(({ ...rest }) => <tr {...rest} />)`
    background-color: ${(props) => props.theme.colors.background.default};
    margin: 0;
    padding: 0;
    td {
        border: none;
        border-bottom: 1px solid ${(props) => props.theme.colors.border.default};
    }
    :nth-child(2n) {
        background-color: ${(props) => props.theme.colors.background.tint};
    }
`;

export const TableRow = ({ children, ...props }) => {
    const a11yProps = {};

    return (
        <StyledTr {...a11yProps} {...props}>
            {children}
        </StyledTr>
    );
};

TableRow.propTypes = {
    children: PropTypes.node.isRequired
};

TableRow.defaultProps = {};
