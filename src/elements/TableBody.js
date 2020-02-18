// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Spinner } from './Spinner';

const StyledTbody = styled(({ ...rest }) => <tbody {...rest} />)`
    td {
    }
    tr:hover {
        background-color: ${(props) => props.theme.colors.background.tintAlt};
    }
`;

const LoadingInterstitial = styled(({ ...rest }) => <div {...rest} />)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    backdrop-filter: blur(1px);
    background-color: ${(props) => props.theme.colors.neutral.N3A};
    cursor: wait;
`;

export const TableBody = ({ children, loading, ...props }) => {
    const a11yProps = {};

    return (
        <>
            <StyledTbody {...a11yProps} {...props}>
                {children}
            </StyledTbody>
            {loading && (
                <LoadingInterstitial>
                    <Spinner primary size={96} />
                </LoadingInterstitial>
            )}
        </>
    );
};

TableBody.propTypes = {
    children: PropTypes.node.isRequired,
    loading: PropTypes.bool
};

TableBody.defaultProps = { loading: false };
