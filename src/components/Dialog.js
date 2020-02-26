// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Modal } from './../elements/Modal';

const DialogOptions = {
    size: ['sm', 'md', 'lg']
};

const DialogSizeMap = {
    sm: 36,
    md: 42,
    lg: 64
};

const DialogCard = styled(({ rounder, size, ...rest }) => <div {...rest} />)`
    background-color: ${(props) => props.theme.colors.background.default};
    border-radius: ${(props) => props.theme.constants.corner};
    box-shadow: 2px 0 0 ${(props) => props.theme.colors.neutral.N1A},
        0 0.33rem 2rem ${(props) => props.theme.colors.neutral.N6A};
    display: flex;
    flex-direction: column;
    margin: 2.25rem;
    max-height: calc(100% - 64px);
    min-width: 20rem;
    width: ${(props) => DialogSizeMap[props.size] || 84}rem;
`;

export const Dialog = ({ children, close, visible, ...props }) => {
    const modalProps = {
        close,
        visible
    };

    return (
        <Modal {...modalProps}>
            <DialogCard {...props}>{children}</DialogCard>
        </Modal>
    );
};

Dialog.propTypes = {
    /**
     * The actual component(s) to render within the `<Dialog />` card.
     */
    children: PropTypes.node.isRequired,
    /**
     * The function by which to set `visible={false}`, and if defined,
     * renders a "x" close button in the `<DialogHeader />`.
     */
    close: PropTypes.func,
    /**
     * For accesibility purposes, define a unique identifier for this dialog.
     */
    id: PropTypes.string.isRequired,
    /**
     * Controls the width of the `<Dialog />` card.
     */
    size: PropTypes.oneOf([...DialogOptions.size]),
    /**
     * Sets the visibility of the actual card and modal.
     */
    visible: PropTypes.bool
};

Dialog.defaultProps = {
    size: 'md',
    visible: false
};
