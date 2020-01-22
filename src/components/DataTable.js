// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTable, useFilters, useGlobalFilter, useSortBy, usePagination } from 'react-table';

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
    setTableState,
    showControlDeck,
    showHeader,
    tableState,
    paged,
    ...props
}) => {

    let tableArgs = [
        {
            data,
            columns,
            initialState: tableState
        },
        useFilters,
        useGlobalFilter,
        useSortBy
    ];
    if (paged) {
        tableArgs = [...tableArgs, usePagination];
    }

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
        nextPage,
        setPageSize,
        canPreviousPage,
        canNextPage
    } = useTable(
        ...tableArgs
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

    const controlDeckProps = {
        buttons: controlButtons,
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
            {paged &&
            <div>
                <select
                    value={state.pageSize}
                    onChange={e => {
                        setPageSize(Number(e.target.value))
                    }}
                >
                    {[10, 20, 30, 40, 50].map(pageSize => (
                        <option key={pageSize} value={pageSize}>
                            Show {pageSize}
                        </option>
                    ))}
                </select>
                {` Entries`}
            </div>
            }
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
                        (paged ? page : rows).map((row, i) => {
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
            {paged &&
            <div>
                <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    Previous Page
                </button>
                <button onClick={() => nextPage()} disabled={!canNextPage}>
                    Next Page
                </button>
                <div>
                    Page{' '}
                    <em>
                        {state.pageIndex + 1} of {pageOptions.length}
                    </em>
                </div>
                <div>
                    Go to page:
                    <input
                        type="number"
                        defaultValue={state.pageIndex + 1}
                        onChange={e => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0
                            gotoPage(page)
                        }}
                        style={{ width: '100px' }}
                    />
                </div>
            </div>
            }
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
    numRows: PropTypes.number,
    setTableState: PropTypes.func,
    showControlDeck: PropTypes.bool,
    showHeader: PropTypes.bool,
    tableState: PropTypes.object,
    paged: PropTypes.bool
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
    numRows: 10,
    showControlDeck: true,
    showHeader: false,
    tableState: {},
    paged: false
};
