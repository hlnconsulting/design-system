// eslint-disable-next-line no-unused-vars
import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { DataTable } from './DataTable';

import { MaterialIcon } from './../elements/MaterialIcon';

export default {
    title: 'Components|Tables',
    component: DataTable,
    decorators: [withKnobs]
};

export const dataTable = () => {
    const DataTableSampleData = {
        columns: React.useMemo(
            () => [
                {
                    Header: `Specification Added?`,
                    accessor: `specAdded`,
                    renderOptions: {
                        columnStyles: {
                            textAlign: 'center'
                        },
                        type: `bool`,
                        values: {
                            true: (
                                <MaterialIcon
                                    icon="check_circle_outline"
                                    size={24}
                                    intent="success"
                                />
                            ),
                            false: (
                                <MaterialIcon
                                    icon="not_interested"
                                    size={24}
                                    intent="danger"
                                />
                            )
                        }
                    }
                },
                {
                    Header: `Nationally Notifiable?`,
                    accessor: `notifyNationally`,
                    renderOptions: {
                        columnStyles: {
                            textAlign: 'center'
                        },
                        type: `bool`,
                        values: {
                            true: <span>Y</span>,
                            false: <span>N</span>
                        }
                    }
                },
                {
                    Header: `Specification Name`,
                    accessor: `name`
                },
                {
                    Header: `Version`,
                    accessor: `version`
                },
                {
                    Header: `Category`,
                    accessor: `category`
                },
                {
                    Header: `Status`,
                    accessor: `status`
                },
                {
                    Header: `Last Updated`,
                    accessor: `updated`
                },
                {
                    Header: ``,
                    accessor: `controls`
                }
            ],
            []
        ),
        data: React.useMemo(
            () => [
                {
                    name: `Campylobacteriosis`,
                    version: `0.0`,
                    category: `Enteric Diseases`,
                    status: `Published to Production`,
                    updated: ``,
                    specAdded: true,
                    notifyNationally: true
                },
                {
                    name: `Carbon Monoxide Poisoning`,
                    version: `1.0`,
                    category: `Toxic Effects of Non-Medicinal Substances`,
                    status: `In Progress`,
                    updated: ``,
                    specAdded: true,
                    notifyNationally: true
                },
                {
                    name: `Chlamydia`,
                    version: `2.0`,
                    category: `Sexually Transmitted Infections`,
                    status: `Published to Production`,
                    updated: ``,
                    specAdded: true,
                    notifyNationally: true
                }
            ],
            []
        )
    };

    const reactTableRef = React.useRef(null);

    const onFilterChange = (e) =>
        reactTableRef.current.setFilter(e.target.value || undefined);

    return (
        <>
            <DataTable
                columns={DataTableSampleData.columns}
                data={DataTableSampleData.data}
                fullWidth={boolean(`Full Width Table`, true)}
                id="story_datatable_00"
                label="Sample Table"
                onFilterChange={onFilterChange}
                reactTableRef={reactTableRef}
                showHeader={boolean(`Table Header`, true)}
            />
        </>
    );
};

dataTable.story = {
    name: 'Data Table'
};
