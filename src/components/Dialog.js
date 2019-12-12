// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Modal } from './../elements/Modal';

const DialogOptions = {
    size: ['sm', 'md', 'lg']
};

const DialogCard = styled(({ size, ...rest }) => <div {...rest} />)`
    background-color: ${(props) => props.theme.colors.background.default};
    border-radius: 3px;
    box-shadow: 2px 0 0 ${(props) => props.theme.colors.neutral.N1A};
    display: flex;
    flex-direction: column;
    margin: 2.25rem;
    max-height: calc(100% - 64px);
    max-width: ${(props) =>
        props.size === 'sm'
            ? 36
            : props.size === 'md'
            ? 42
            : props.size === 'lg'
            ? 64
            : 84}rem;
`;

export const Dialog = ({ children, visible, ...props }) => {
    const modalProps = {
        visible
    };

    return (
        <Modal {...modalProps}>
            <DialogCard>{children}</DialogCard>
        </Modal>
    );
};

Dialog.propTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    size: PropTypes.oneOf([...DialogOptions.size]),
    visible: PropTypes.bool
};

Dialog.defaultProps = {
    size: 'md',
    visible: false
};
