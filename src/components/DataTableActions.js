// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { MaterialIcon } from './../elements/MaterialIcon';

const ActionContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ActionItem = styled(({ ...rest }) => <button {...rest} />)`
    background-color: transparent;
    border: none;
    border-radius: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    height: 2.33rem;
    margin: 0 0.033rem;
    padding: 0;
    width: 2.33rem;
    :hover {
        cursor: pointer;
        i {
            color: ${(props) => props.theme.colors.brand.P8};
        }
    }

    i {
        color: ${(props) => props.theme.colors.brand.P5};
    }
`;

export const DataTableActions = ({ actions, ...props }) => {
    const a11yProps = {};

    return (
        <ActionContainer {...a11yProps} {...props}>
            {actions &&
                actions.map((action, i) => (
                    <ActionItem
                        aria-label={action.label || `Action ${i}`}
                        key={`actionItem_${action?.label}_${i}`}
                        onClick={action?.action}
                    >
                        <MaterialIcon
                            aria-hidden
                            icon={action?.icon || `border_outer`}
                            role="img"
                            {...(action.iconProps || {})}
                        />
                    </ActionItem>
                ))}
        </ActionContainer>
    );
};

DataTableActions.propTypes = {
    actions: PropTypes.array
};

DataTableActions.defaultProps = {
    actions: []
};
