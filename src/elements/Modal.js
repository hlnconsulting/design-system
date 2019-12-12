// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ModalPresentationLayer = styled(({ visible, ...rest }) => (
    <div {...rest} />
))`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    visibility: ${(props) => (props.visible ? `visible` : `hidden`)};
    z-index: 1337;
`;

const ModalBackdrop = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
`;

const ModalContainer = styled(({ ...rest }) => <div {...rest} />)`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    outline: 0;
`;

export const Modal = ({ children, close, visible, ...props }) => {
    const a11yProps = {};

    return (
        <ModalPresentationLayer
            aria-hidden
            role="presentation"
            visible={visible}
        >
            <ModalBackdrop ariaHidden onClick={close} />
            <ModalContainer {...a11yProps} {...props}>
                {children}
            </ModalContainer>
        </ModalPresentationLayer>
    );
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    close: PropTypes.func,
    visible: PropTypes.bool
};

Modal.defaultProps = {
    visible: false
};
