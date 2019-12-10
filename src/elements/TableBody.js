// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTbody = styled(({ ...rest }) => <tbody {...rest} />)`
    td {
    }
    tr:hover {
        background-color: ${(props) => props.theme.colors.background.tintAlt};
    }
`;

export const TableBody = ({ children, ...props }) => {
    const a11yProps = {};

    return (
        <StyledTbody {...a11yProps} {...props}>
            {children}
        </StyledTbody>
    );
};

TableBody.propTypes = {
    children: PropTypes.node.isRequired
};

TableBody.defaultProps = {};
