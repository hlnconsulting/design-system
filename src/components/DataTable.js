// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { useTable, useSortBy } from 'react-table';

import { DataTableContainer } from './../elements/DataTableContainer';
import { TableBody } from './../elements/TableBody';
import { TableHeader } from './../elements/TableHeader';
import { TableRow } from './../elements/TableRow';
import { TableCell } from './../elements/TableCell';

export const DataTable = ({ columns, data, id, label, ...props }) => {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow
    } = useTable(
        {
            data,
            columns
        },
        useSortBy
    );

    const dataTableProps = {
        displayLabel: !!(typeof label && label),
        id,
        label
    };

    return (
        <DataTableContainer {...dataTableProps} {...getTableProps()}>
            <TableHeader>
                {headerGroups.map((headerGroup) => (
                    // eslint-disable-next-line react/jsx-key
                    <TableRow {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map((col) => (
                            // eslint-disable-next-line react/jsx-key
                            <TableCell {...col.getHeaderProps()}>
                                {col.render('Header')}
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
                                <TableCell {...cell.getCellProps()}>
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
    );
};

DataTable.propTypes = {
    columns: PropTypes.array.isRequired,
    cursor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    data: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string
};

DataTable.defaultProps = {
    columns: [],
    cursor: 0,
    data: []
};
