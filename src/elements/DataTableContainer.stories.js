// eslint-disable-next-line no-unused-vars
import React from 'react';

import { DataTableContainer } from './DataTableContainer';

export default {
    title: 'Elements|Data Table/Container',
    component: DataTableContainer
};

export const field = () => (
    <>
        <DataTableContainer>
            <p>Tabular content will reside here.</p>
        </DataTableContainer>
    </>
);

field.story = {
    name: 'Overview'
};
