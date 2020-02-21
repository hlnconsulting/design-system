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

/**
 * Based on v7.0.0+ of `react-table`
 * ([documentation](https://github.com/tannerlinsley/react-table)),
 * the `DataTable` component is designed to provide the UI components with a
 * basic implementation of the various utilities and toolings provided by
 * `react-table`, including sorting, filtering, pagination, and default
 * layout recommendations.
 *
 * In most cases, this basic implementation should be overkill, however, as it
 * is based off an implementation with hooks, performance should scale with
 * the complexity of _your_ usage of this components, and that of your dataset.
 */

export const DataTable = ({
    columns,
    controlButtons,
    data,
    entityLabels,
    error,
    filterPlaceholder,
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
        filterPlaceholder,
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

    const setGlobalFilterAndResetPageIndex = (v) => {
        setGlobalFilter(v);
        gotoPage(0);
    };

    return (
        <>
            {showHeader && (
                <DataTableHeader
                    {...dataTableProps}
                    globalFilterContext={state.globalFilter}
                    onFilterChange={
                        paginated
                            ? setGlobalFilterAndResetPageIndex
                            : setGlobalFilter
                    }
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
    /**
     * A **memoized** array of `Column` definitions.
     *
     * Refer to the [documentation](https://github.com/tannerlinsley/react-table/blob/master/docs/api/useTable.md#table-options) for more information.
     */
    columns: PropTypes.array.isRequired,
    /**
     * Pass an array of `<Button />` components for rendering in the control
     * deck.
     */
    controlButtons: PropTypes.array,
    cursor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    /**
     * A **memoized** array of data to be mapped into the table.
     *
     * Refer to the [documentation](https://github.com/tannerlinsley/react-table/blob/master/docs/api/useTable.md#table-options) for more information.
     */
    data: PropTypes.array.isRequired,
    /**
     * Defines the labels to be used when describing the data represented by
     * this table. Used in the empty state, show X of Y dropdown, and various
     * autogenerated `title=""` parameters.
     */
    entityLabels: PropTypes.object,
    /**
     * _Reserved for future use_; to indicate an error state in loading of
     * table data, or a child element rendering error.
     */
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
        PropTypes.string
    ]),
    /**
     * Requires `showHeader`. Sets the placeholder value for the table's filter.
     */
    filterPlaceholder: PropTypes.string,
    /**
     * Forces the table to stretch to fill the parent element's available space.
     */
    fullWidth: PropTypes.bool,
    /**
     * For accessibility requirements, provide a unique ID for your table.
     *
     * This value is also used to generate unique keys in various mappings.
     */
    id: PropTypes.string.isRequired,
    /**
     * Requires `showHeader`. Displays a heading above the table.
     */
    label: PropTypes.string,
    /**
     * Set a loading state on the table render, and display a loading spinner
     * over the rendered table rows.
     */
    loading: PropTypes.bool,
    /**
     * Requires `paginated`. Sets the initial number of rows to render.
     */
    numRowsInitialValue: PropTypes.number,
    /**
     * Enables the pagination controls for the table.
     */
    paginated: PropTypes.bool,
    setTableState: PropTypes.func,
    /**
     * Render the control deck below the table body.
     */
    showControlDeck: PropTypes.bool,
    /**
     * Display the table's label as a heading, and the global filter.
     */
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
    filterPlaceholder: `Search...`,
    fullWidth: true,
    loading: false,
    numRowsInitialValue: 10,
    paginated: false,
    showControlDeck: true,
    showHeader: false,
    tableState: {}
};
