// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { MaterialIcon } from './../elements/MaterialIcon';
import { TextField } from './../elements/TextField';

const ModifiedTextField = styled(({ ...rest }) => <TextField {...rest} />)``;

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
    id: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
};

DataTableFilter.defaultProps = {
    onChange: () => null,
    placeholder: `Search...`
};
