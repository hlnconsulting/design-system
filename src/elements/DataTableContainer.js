// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledTableContainer = styled(({ ...rest }) => <div {...rest} />)`
    display: flex;
    overflow-x: auto;
`;

const StyledDataTable = styled(({ fullWidth, ...rest }) => <table {...rest} />)`
    border: 1px solid ${(props) => props.theme.colors.border.default};
    border-radius: 3px;
    border-spacing: 0;
    box-shadow: 0 2px 0 ${(props) => props.theme.colors.neutral.N1A};
    width: ${(props) => (props.fullWidth ? `100%` : `auto`)};
`;

export const DataTableContainer = ({
    children,
    displayLabel,
    id,
    label,
    ...props
}) => {
    const a11yProps = {
        'aria-label': displayLabel ? undefined : label,
        'aria-labelledby': displayLabel ? id : undefined
    };

    return (
        <StyledTableContainer>
            <StyledDataTable {...a11yProps} {...props}>
                {children}
            </StyledDataTable>
        </StyledTableContainer>
    );
};

DataTableContainer.propTypes = {
    children: PropTypes.node.isRequired,
    displayLabel: PropTypes.bool,
    fullWidth: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string
};

DataTableContainer.defaultProps = {
    displayLabel: false,
    label: `Unlabelled Table`
};
