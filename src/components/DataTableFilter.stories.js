// eslint-disable-next-line no-unused-vars
import React from 'react';

import { DataTableFilter } from './DataTableFilter';

export default {
    title: 'Components/DataTable Utilities/Filter',
    component: DataTableFilter,
    parameters: {
        componentSubtitle: `A simple search/filter field, built to support DataTables.`
    }
};

export const dataTableFilter = () => {
    return (
        <>
            <DataTableFilter
                id="uniqueTableId--filter"
                onChange={() => null}
                placeholder="Placeholder value..."
            />
            <br />
        </>
    );
};

dataTableFilter.story = {
    name: 'Overview'
};
