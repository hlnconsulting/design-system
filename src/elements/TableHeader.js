// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledThead = styled(({ ...rest }) => <thead {...rest} />)`
    tr {
        background-color: ${(props) => props.theme.colors.background.tint};
        td {
            border-top: 1px solid
                ${(props) => props.theme.colors.background.default};
            :first-child {
                border-top-left-radius: 3px;
            }
            :last-child {
                border-top-right-radius: 3px;
            }
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
