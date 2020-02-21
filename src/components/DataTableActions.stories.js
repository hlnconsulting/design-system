// eslint-disable-next-line no-unused-vars
import React from 'react';

import { DataTable } from './DataTable';
import { DataTableActions } from './DataTableActions';

export default {
    title: 'Components/DataTable Utilities/Actions',
    component: DataTableActions,
    parameters: {
        componentSubtitle: `Represent line-item level actions as icon buttons.`
    }
};

export const dataTableActions = () => {
    const DataTableSampleActions = [
        {
            action: () => null,
            label: `Create`,
            icon: `post_add`
        },
        {
            action: () => null,
            label: `Edit`,
            icon: `edit`
        },
        {
            action: () => null,
            label: `Delete`,
            icon: `delete`
        }
    ];

    const DataTableSampleData = {
        columns: React.useMemo(
            () => [
                {
                    Header: `Test Table Rows`,
                    accessor: `testRow`
                },
                {
                    Header: ``,
                    accessor: `DataTableActions`,
                    disableSortBy: true,
                    DataTableActions: true
                }
            ],
            []
        ),
        data: React.useMemo(
            () => [
                {
                    testRow: `Test Row 1`,
                    DataTableActions: [...DataTableSampleActions]
                },
                {
                    testRow: `Test Row 2`,
                    DataTableActions: [...DataTableSampleActions]
                },
                {
                    testRow: `Test Row 3`,
                    DataTableActions: [...DataTableSampleActions]
                }
            ],
            []
        )
    };

    return (
        <DataTable
            columns={DataTableSampleData.columns}
            data={DataTableSampleData.data}
            id="story_datatable_01"
            label="Data Table Actions"
            showHeader
        />
    );
};

dataTableActions.story = {
    name: 'Table with Actions'
};
