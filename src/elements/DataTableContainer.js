// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { DataTableFilter } from './../components/DataTableFilter';

const StyledDataTable = styled(({ ...rest }) => <table {...rest} />)`
    border: 1px solid ${(props) => props.theme.colors.border.default};
    border-radius: 3px;
    border-spacing: 0;
    box-shadow: 0 2px 0 ${(props) => props.theme.colors.neutral.N1A};
    width: 100%;
`;

const DataTableMasthead = styled(({ display, ...rest }) => <div {...rest} />)`
    display: ${(props) => (props.display ? 'flex' : 'none')};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
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
    onFilterChange,
    label,
    ...props
}) => {
    const a11yProps = {
        'aria-label': displayLabel ? undefined : label,
        'aria-labelledby': displayLabel ? id : undefined
    };

    return (
        <>
            <DataTableMasthead display={displayLabel}>
                <TableLabel id={id}>{label}</TableLabel>
                {typeof onFilterChange === 'function' && (
                    <DataTableFilter onChange={onFilterChange} />
                )}
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
    onFilterChange: PropTypes.func,
    label: PropTypes.string
};

DataTableContainer.defaultProps = {
    displayLabel: false,
    label: `Unlabelled Table`
};
