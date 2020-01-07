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

const DialogCard = styled(({ size, ...rest }) => <div {...rest} />)`
    background-color: ${(props) => props.theme.colors.background.default};
    border-radius: 3px;
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
    children: PropTypes.node.isRequired,
    close: PropTypes.func,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    size: PropTypes.oneOf([...DialogOptions.size]),
    visible: PropTypes.bool
};

Dialog.defaultProps = {
    size: 'md',
    visible: false
};
