// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledIcon = styled(({ color, intent, size, ...rest }) => (
    <i {...rest} />
))`
    color: ${(props) =>
        !props.color && !props.intent
            ? `inherit`
            : !props.intent
            ? props.theme.colors[props.color]
            : props.theme.colors.intent[props.intent]};
    font-family: 'Material Icons';
    font-weight: normal;
    font-style: normal;
    font-size: ${(props) => props.size}px;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;

    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;

    /* Support for IE. */
    font-feature-settings: 'liga';
`;

export const MaterialIcon = ({ icon, ...props }) => {
    const a11yProps = {
        'aria-hidden': true,
        role: 'img'
    };

    return (
        <StyledIcon {...a11yProps} {...props}>
            {icon}
        </StyledIcon>
    );
};

MaterialIcon.propTypes = {
    color: PropTypes.string,
    icon: PropTypes.string,
    intent: PropTypes.oneOf(['none', 'info', 'success', 'warning', 'danger']),
    size: PropTypes.oneOf([18, 24, 36, 48])
};

MaterialIcon.defaultProps = {
    intent: 'none',
    size: 24
};
