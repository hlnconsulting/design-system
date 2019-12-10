// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDataTable = styled(({ ...rest }) => <table {...rest} />)`
    border: none;
    border-spacing: 0;
`;

const DataTableMasthead = styled(({ display, ...rest }) => <div {...rest} />)`
    display: ${(props) => (props.display ? 'flex' : 'none')};
    visibility: ${(props) => (props.display ? 'visible' : 'hidden')};
`;

const TableLabel = styled.h3`
    color: ${(props) => props.theme.colors.text.default};
    font-family: ${(props) => props.theme.typography.fonts.ui};
    font-size: 1.337rem;
    font-weight: 600;
    line-height: 2rem;
    margin: 1.337rem 0;
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
        'aria-labelledby': displayLabel ? label : undefined
    };

    return (
        <>
            <DataTableMasthead display={displayLabel}>
                <TableLabel id={id}>{label}</TableLabel>
            </DataTableMasthead>
            <StyledDataTable {...a11yProps} {...props}>
                {children}
            </StyledDataTable>
        </>
    );
};

DataTableContainer.propTypes = {
    children: PropTypes.node.isRequired,
    displayLabel: PropTypes.bool,
    id: PropTypes.string,
    label: PropTypes.string
};

DataTableContainer.defaultProps = {
    displayLabel: false,
    label: `Unlabelled Table`
};
