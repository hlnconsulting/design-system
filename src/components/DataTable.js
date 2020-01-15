// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTable, useFilters, useGlobalFilter, useSortBy } from 'react-table';

import { DataTableActions } from './DataTableActions';
import { DataTableContainer } from './../elements/DataTableContainer';
import { DataTableControlDeck } from './../elements/DataTableControlDeck';
import { DataTableHeader } from './../elements/DataTableHeader';
import { TableBody } from './../elements/TableBody';
import { TableHeader } from './../elements/TableHeader';
import { TableRow } from './../elements/TableRow';
import { TableCell } from './../elements/TableCell';
import { MaterialIcon } from './../elements/MaterialIcon';

const RenderDataTableCell = ({ datum, ...props }) => {
    return (
        <TableCell
            {...datum.getCellProps()}
            style={{
                ...(datum.column?.renderOptions?.columnStyles || {})
            }}
        >
            {typeof datum.column.renderOptions !== 'undefined' ? (
                datum.column.renderOptions?.values[datum.value]
            ) : typeof datum.column.DataTableActions !== 'undefined' ? (
                <DataTableActions actions={datum.value} />
            ) : (
                datum.render('Cell')
            )}
        </TableCell>
    );
};

RenderDataTableCell.propTypes = {
    datum: PropTypes.object
};

export const DataTable = ({
    columns,
    data,
    fullWidth,
    id,
    label,
    setTableState,
    showControlDeck,
    showHeader,
    tableState,
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
            columns,
            initialState: tableState
        },
        useFilters,
        useGlobalFilter,
        useSortBy
    );

    useEffect(() => {
        typeof setTableState === 'function' && setTableState(state);
    });

    const dataTableProps = {
        displayLabel: !!(typeof label && label),
        fullWidth,
        id,
        label
    };

    // TODO: add controlDeckProps and then spread that into the comp below

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
                                    <RenderDataTableCell datum={cell} />
                                ))}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </DataTableContainer>
            {showControlDeck && <DataTableControlDeck />}
        </>
    );
};

DataTable.propTypes = {
    columns: PropTypes.array.isRequired,
    cursor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    data: PropTypes.array.isRequired,
    fullWidth: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    numRows: PropTypes.number,
    setTableState: PropTypes.func,
    showControlDeck: PropTypes.bool,
    showHeader: PropTypes.bool,
    tableState: PropTypes.object
};

DataTable.defaultProps = {
    columns: [],
    cursor: 0,
    data: [],
    fullWidth: true,
    numRows: 10,
    showControlDeck: true,
    showHeader: false,
    tableState: {}
};
