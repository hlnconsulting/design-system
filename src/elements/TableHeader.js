// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledThead = styled(({ ...rest }) => <thead {...rest} />)`
    tr {
        background-color: ${(props) => props.theme.colors.background.tint};
        td {
            padding: 0.66rem 0;
            span {
                font-weight: 600;
            }
        }
    }
`;

export const TableHeader = ({ children, ...props }) => {
    const a11yProps = {};

    return (
        <StyledThead {...a11yProps} {...props}>
            {children}
        </StyledThead>
    );
};

TableHeader.propTypes = {
    children: PropTypes.node.isRequired
};

TableHeader.defaultProps = {};
