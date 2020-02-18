// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { borderRadius } from 'polished';

import { MaterialIcon } from './MaterialIcon';

const HeaderContainer = styled(({ borderless, ...rest }) => <div {...rest} />)`
    background-color: ${(props) => props.theme.colors.background.default};
    ${(props) =>
        !props.borderless &&
        `border-bottom: 1px solid ${props.theme.colors.border.default}`};
    ${borderRadius(`top`, (props) => props.theme.constants.corner)};
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1.337rem;
`;

const HeaderLabel = styled(({ ...rest }) => <h3 {...rest} />)`
    color: ${(props) => props.theme.colors.text.default};
    font-family: ${(props) => props.theme.typography.fonts.ui};
    font-size: 1.066rem;
    font-weight: 600;
    line-height: 1.337rem;
    margin: 0;
    min-width: 10rem;
`;

const CloseTapTarget = styled(({ ...rest }) => <div {...rest} />)`
    border-radius: 100%;
    color: ${(props) => props.theme.colors.monochrome.MC2};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 2rem;
    width: 2rem;
    :hover {
        background-color: ${(props) => props.theme.colors.background.tintAlt};
        color: ${(props) => props.theme.colors.text.muted};
        cursor: pointer;
    }
    :active {
        background-color: ${(props) => props.theme.colors.brand.P5};
        color: ${(props) => props.theme.colors.fixed.white};
    }
`;

export const DialogHeader = ({ children, close, ...props }) => {
    const a11yProps = {};

    return (
        <HeaderContainer {...a11yProps} {...props}>
            {typeof children === 'string' ? (
                <HeaderLabel>{children}</HeaderLabel>
            ) : (
                children
            )}
            {typeof close === 'function' && (
                <CloseTapTarget onClick={close}>
                    <MaterialIcon icon="close" size={18} />
                </CloseTapTarget>
            )}
        </HeaderContainer>
    );
};

DialogHeader.propTypes = {
    borderless: PropTypes.bool,
    children: PropTypes.node,
    close: PropTypes.func
};

DialogHeader.defaultProps = {
    borderless: false
};
