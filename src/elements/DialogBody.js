// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const DialogBodyContainer = styled(({ dense, ...rest }) => <div {...rest} />)`
    background-color: ${(props) => props.theme.colors.background.default};
    display: flex;
    flex-direction: column;
    align-items: stretch;
    padding: ${(props) => (props.dense ? `0` : `1rem 1.337rem`)};

    p {
        color: ${(props) => props.theme.colors.text.default};
        font-family: ${(props) => props.theme.typography.fonts.ui};
        font-size: 0.9337rem;
        font-weight: 400;
    }
`;

export const DialogBody = ({ ...props }) => {
    const a11yProps = {};

    return <DialogBodyContainer {...a11yProps} {...props} />;
};

DialogBody.propTypes = {
    children: PropTypes.node,
    dense: PropTypes.bool
};

DialogBody.defaultProps = {
    dense: false
};
