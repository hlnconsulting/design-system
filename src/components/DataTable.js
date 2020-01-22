// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    useTable,
    useFilters,
    useGlobalFilter,
    usePagination,
    useSortBy
} from 'react-table';

import { DataTableActions } from './DataTableActions';
import { DataTableContainer } from './../elements/DataTableContainer';
import { DataTableControlDeck } from './../elements/DataTableControlDeck';
import { DataTableHeader } from './../elements/DataTableHeader';
import { TableBody } from './../elements/TableBody';
import { TableEmptyState } from './../elements/TableEmptyState';
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
    controlButtons,
    data,
    entityLabels,
    error,
    fullWidth,
    id,
    label,
    loading,
    numRowsInitialValue,
    paginated,
    setTableState,
    showControlDeck,
    showHeader,
    tableState,
    ...props
}) => {
    const reactTableArgs = [
        {
            data,
            columns,
            initialState: tableState
        },
        useFilters,
        useGlobalFilter,
        useSortBy,
        usePagination // Not alphashorted due to exception if placed before useSortBy
    ];

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
        state,
        setGlobalFilter,
        pageOptions,
        page,
        gotoPage,
        previousPage,
        canPreviousPage,
        nextPage,
        canNextPage,
        setPageSize
    } = useTable(...reactTableArgs);

    useEffect(() => {
        typeof setTableState === 'function' && setTableState(state);
    });

    const dataTableProps = {
        displayLabel: !!(typeof label && label),
        fullWidth,
        id,
        label
    };

    const paginationProps = {
        backward: previousPage,
        backwardDisabled: !canPreviousPage,
        forward: nextPage,
        forwardDisabled: !canNextPage,
        goToPage: (v) => gotoPage(Number(v)), // Force number type
        numPages: pageOptions.length || 1,
        numRows: state.pageSize || numRowsInitialValue,
        pageIndex: state.pageIndex || 0,
        setNumRows: (v) => setPageSize(Number(v)) // Force number type
    };

    const controlDeckProps = {
        buttons: controlButtons,
        pagination: paginated ? paginationProps : false,
        ...entityLabels
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
                <TableBody loading={loading} {...getTableBodyProps()}>
                    {!error && rows.length ? (
                        (paginated && page ? page : rows).map((row, i) => {
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
                        })
                    ) : (
                        <TableRow>
                            <TableEmptyState
                                cols={columns.length}
                                error={error}
                                label={entityLabels?.plural || `data`}
                                query={state?.globalFilter || ``}
                            />
                        </TableRow>
                    )}
                </TableBody>
            </DataTableContainer>
            {showControlDeck && <DataTableControlDeck {...controlDeckProps} />}
        </>
    );
};

DataTable.propTypes = {
    columns: PropTypes.array.isRequired,
    controlButtons: PropTypes.array,
    cursor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    data: PropTypes.array.isRequired,
    entityLabels: PropTypes.object,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
        PropTypes.string
    ]),
    fullWidth: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    loading: PropTypes.bool,
    numRowsInitialValue: PropTypes.number,
    paginated: PropTypes.bool,
    setTableState: PropTypes.func,
    showControlDeck: PropTypes.bool,
    showHeader: PropTypes.bool,
    tableState: PropTypes.object
};

DataTable.defaultProps = {
    columns: [],
    controlButtons: [],
    cursor: 0,
    data: [],
    entityLabels: {
        singular: `entry`,
        plural: `entries`
    },
    error: false,
    fullWidth: true,
    loading: false,
    numRowsInitialValue: 10,
    paginated: false,
    showControlDeck: true,
    showHeader: false,
    tableState: {}
};
