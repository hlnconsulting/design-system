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
                        title={action.label || `Action ${i}`}
                        {...(action.buttonProps || {})}
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
    /**
     * An array of action objects to be mapped as icon buttons.
     *
     * An action object is currently defined as an `action` to be called when
     * an onPress/onClick event is triggered, a `label` for accessibility
     * purposes, and finally the Google Material Design `icon` to be rendered.
     *
     * For example:
     *
     * ```es6
     * {
     *   action: () => null,
     *   label: `Create`,
     *   icon: `post_add`
     * }
     * ```
     *
     * For available icon options, please refer to the webfont documentation
     * for [Material Design Icons](https://material.io/resources/icons/?style=baseline).
     */
    actions: PropTypes.array
};

DataTableActions.defaultProps = {
    actions: []
};
