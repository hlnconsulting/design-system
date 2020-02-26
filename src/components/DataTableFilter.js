// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { MaterialIcon } from './../elements/MaterialIcon';
import { TextField } from './../elements/TextField';

const ModifiedTextField = styled(({ ...rest }) => <TextField {...rest} />)``;

/**
 * This component is automatically rendered as part of the `<DataTable />`
 * header, and is directly related to the `setGlobalFilter` method of
 * `react-table`.
 */

export const DataTableFilter = ({ id, onChange, ...props }) => {
    const a11yProps = {};

    return (
        <ModifiedTextField
            onChange={onChange}
            id={`${id}--filter`}
            inputProps={{
                prefix: <MaterialIcon icon="search" intent="muted" size={18} />,
                style: {
                    flexBasis: `33.337%`
                }
            }}
            size={`sm`}
            {...a11yProps}
            {...props}
        />
    );
};

DataTableFilter.propTypes = {
    /**
     * This is set by `<DataTable />` automatically.
     */
    id: PropTypes.string.isRequired,
    /**
     * This is set by `<DataTable />` automatically.
     */
    onChange: PropTypes.func.isRequired,
    /**
     * This is set by `<DataTable />` automatically.
     */
    placeholder: PropTypes.string.isRequired
};

DataTableFilter.defaultProps = {};
