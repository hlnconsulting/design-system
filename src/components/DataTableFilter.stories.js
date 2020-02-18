// eslint-disable-next-line no-unused-vars
import React from 'react';

import { DataTableFilter } from './DataTableFilter';

export default {
    title: 'Components|Tables/Data Table Utilities/Filter',
    component: DataTableFilter
};

export const dataTableFilter = () => {
    return (
        <>
            <DataTableFilter />
            <br />
        </>
    );
};

dataTableFilter.story = {
    name: 'Overview'
};
