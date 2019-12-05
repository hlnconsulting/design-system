// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonOptions = {
    appearance: ['primary', 'secondary', 'tertiary'],
    size: ['sm', 'md', 'lg']
};

const ButtonLabel = styled.span`
    color: ${(props) => props.theme.colors.text.default};
    font-family: ${(props) => props.theme.typography.fonts.ui};
    font-size: 1.066rem;
    font-weight: 500;
`;

const StyledButton = styled.button`
    display: flex;
    flex-direction: row;
    background: ${(props) => props.theme.colors.background.default};
    border: 1px solid ${(props) => props.theme.colors.border.muted};
    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: 0 2px 0 ${(props) => props.theme.colors.neutral.N1A};
`;

export const Button = ({
    children,
    href,
    icon,
    iconPosition,
    loading,
    loadingPosition,
    ...props
}) => {
    const a11yProps = {};

    if (loading) {
        a11yProps['aria-busy'] = true;
        a11yProps['aria-label'] = 'Loading ...';
    }

    return (
        <StyledButton
            as={typeof href !== 'undefined' ? 'a' : undefined}
            {...a11yProps}
            {...props}
        >
            <ButtonLabel>{children}</ButtonLabel>
        </StyledButton>
    );
};

Button.propTypes = {
    appearance: PropTypes.oneOf([...ButtonOptions.appearance]),
    children: PropTypes.node.isRequired,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    icon: PropTypes.node,
    iconPosition: PropTypes.oneOf(['left', 'right']),
    loading: PropTypes.bool,
    loadingPosition: PropTypes.oneOf(['left', 'right']),
    size: PropTypes.oneOf([...ButtonOptions.size])
};

Button.defaultProps = {
    appearance: 'tertiary',
    disabled: false,
    iconPosition: 'left',
    loading: false,
    loadingPosition: 'left',
    size: 'md'
};
