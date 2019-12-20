// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { useTable, useFilters, useGlobalFilter, useSortBy } from 'react-table';

import { DataTableContainer } from './../elements/DataTableContainer';
import { DataTableHeader } from './../elements/DataTableHeader';
import { TableBody } from './../elements/TableBody';
import { TableHeader } from './../elements/TableHeader';
import { TableRow } from './../elements/TableRow';
import { TableCell } from './../elements/TableCell';
import { MaterialIcon } from './../elements/MaterialIcon';

export const DataTable = ({
    columns,
    data,
    id,
    label,
    showHeader,
    ...props
}) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter
    } = useTable(
        {
            data,
            columns
        },
        useFilters,
        useGlobalFilter,
        useSortBy
    );

    const dataTableProps = {
        displayLabel: !!(typeof label && label),
        id,
        label
    };

    return (
        <>
            {showHeader && (
                <DataTableHeader
                    {...dataTableProps}
                    globalFilterContext={state.globalFilter}
                    onFilterChange={setGlobalFilter}
                />
            )}
            <DataTableContainer {...dataTableProps} {...getTableProps()}>
                <TableHeader>
                    {headerGroups.map((headerGroup) => (
                        // eslint-disable-next-line react/jsx-key
                        <TableRow {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((col) => (
                                // eslint-disable-next-line react/jsx-key
                                <TableCell
                                    {...col.getHeaderProps(
                                        col.getSortByToggleProps()
                                    )}
                                >
                                    {col.render('Header')}
                                    {col.isSorted ? (
                                        col.isSortedDesc ? (
                                            <MaterialIcon
                                                icon="arrow_drop_down"
                                                intent="info"
                                                size={18}
                                                // TODO: add a11y for this icon
                                            />
                                        ) : (
                                            <MaterialIcon
                                                icon="arrow_drop_up"
                                                intent="info"
                                                size={18}
                                                // TODO: add a11y for this icon
                                            />
                                        )
                                    ) : (
                                        ``
                                    )}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody {...getTableBodyProps()}>
                    {rows.map((row, i) => {
                        prepareRow(row);
                        return (
                            // eslint-disable-next-line react/jsx-key
                            <TableRow {...row.getRowProps()}>
                                {row.cells.map((cell) => (
                                    // eslint-disable-next-line react/jsx-key
                                    <TableCell
                                        {...cell.getCellProps()}
                                        style={{
                                            ...(cell.column?.renderOptions
                                                ?.columnStyles || {})
                                        }}
                                    >
                                        {typeof cell.column.renderOptions !==
                                        'undefined'
                                            ? cell.column.renderOptions?.values[
                                                  cell.value
                                              ]
                                            : cell.render('Cell')}
                                    </TableCell>
                                ))}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </DataTableContainer>
        </>
    );
};

DataTable.propTypes = {
    columns: PropTypes.array.isRequired,
    cursor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    data: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    showHeader: PropTypes.bool
};

DataTable.defaultProps = {
    columns: [],
    cursor: 0,
    data: [],
    showHeader: false
};
