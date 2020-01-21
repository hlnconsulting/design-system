// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Spinner } from './Spinner';

const ButtonOptions = {
    appearance: ['primary', 'secondary', 'tertiary'],
    size: ['sm', 'md', 'lg']
};

const ButtonLabel = styled.span`
    color: inherit;
    font-family: ${(props) => props.theme.typography.fonts.ui};
    font-size: 0.9rem;
    font-weight: 600;
`;

const StyledButton = styled(({ appearance, loading, text, ...rest }) => (
    <button {...rest} />
))`
    display: inline-flex;
    flex-direction: row;
    background-color: ${(props) =>
        props.disabled
            ? props.theme.colors.background.tint
            : props.theme.colors.background.default};
    border: ${(props) =>
        props.text ? `none` : `1px solid ${props.theme.colors.border.muted}`};
    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: ${(props) =>
        props.text ? `none` : `0 2px 0 ${props.theme.colors.neutral.N1A}`};
    color: ${(props) => props.theme.colors.text.muted};
    margin: 0.1337rem;
    padding: 0.42rem 0.667rem;
    user-select: none;
    :hover {
        background-color: ${(props) => props.theme.colors.background.tint};
        cursor: pointer;
    }
    :active {
        background-color: ${(props) =>
            !props.disabled && props.theme.colors.background.tintAlt};
    }

    ${(props) =>
        props.appearance === 'primary' &&
        `
         background-color: ${
             props.text
                 ? props.disabled
                     ? props.theme.colors.brand.P1
                     : props.theme.colors.background.default
                 : props.disabled
                 ? props.theme.colors.brand.P3
                 : props.theme.colors.brand.P5
         };
         color: ${
             props.text
                 ? props.theme.colors.brand.P5
                 : props.theme.colors.fixed.white
         };
         :hover {
             background-color: ${
                 props.text
                     ? props.theme.colors.brand.P1
                     : props.disabled
                     ? props.theme.colors.brand.P3
                     : props.theme.colors.brand.P4
             };
         }
         :active {
             color: ${!props.disabled && props.theme.colors.fixed.white};
             background-color: ${
                 props.text
                     ? props.disabled
                         ? props.theme.colors.brand.P1
                         : props.theme.colors.brand.P3
                     : props.disabled
                     ? props.theme.colors.brand.P3
                     : props.theme.colors.brand.P6
             };
         }
     `}

    ${(props) =>
        props.appearance === 'secondary' &&
        `
        background-color: ${
            props.text
                ? props.disabled
                    ? props.theme.colors.brand.S1
                    : props.theme.colors.background.default
                : props.disabled
                ? props.theme.colors.brand.S3
                : props.theme.colors.brand.S5
        };
        color: ${
            props.text
                ? props.theme.colors.brand.S5
                : props.theme.colors.fixed.white
        };
        :hover {
            background-color: ${
                props.text
                    ? props.theme.colors.brand.S1
                    : props.disabled
                    ? props.theme.colors.brand.S3
                    : props.theme.colors.brand.S4
            };
        }
        :active {
            color: ${!props.disabled && props.theme.colors.fixed.white};
            background-color: ${
                props.text
                    ? props.disabled
                        ? props.theme.colors.brand.S1
                        : props.theme.colors.brand.S3
                    : props.disabled
                    ? props.theme.colors.brand.S3
                    : props.theme.colors.brand.S6
            };
        }
     `}

     ${(props) => props.disabled && `cursor: not-allowed !important;`}
     ${(props) => props.loading && `cursor: wait !important;`}

     svg {
         /**
          * https://www.smashingmagazine.com/2018/05/svg-interaction-pointer-events-property/
          * "Using pointer-events When Mixing SVG And HTML"
          */
         pointer-events: none;
     }

`;

const PaddedSpinner = styled(({ position, ...rest }) => <Spinner {...rest} />)`
    margin: ${(props) =>
        props.position === 'left' ? `0 0.667rem 0 0` : `0 0 0 0.667rem`};
`;

export const Button = ({
    appearance,
    children,
    disabled,
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

    const ProppedSpinner = (
        <PaddedSpinner
            position={loadingPosition}
            primary={appearance === 'tertiary'}
            size={18}
        />
    );

    return (
        <StyledButton
            as={typeof href !== 'undefined' ? 'a' : 'button'}
            appearance={appearance}
            disabled={loading || disabled}
            loading={loading}
            {...a11yProps}
            {...props}
        >
            {loadingPosition === 'left' && loading && ProppedSpinner}
            <ButtonLabel>{children}</ButtonLabel>
            {loadingPosition === 'right' && loading && ProppedSpinner}
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
    onClick: PropTypes.func,
    size: PropTypes.oneOf([...ButtonOptions.size]),
    text: PropTypes.bool
};

Button.defaultProps = {
    appearance: 'tertiary',
    disabled: false,
    iconPosition: 'left',
    loading: false,
    loadingPosition: 'left',
    size: 'md',
    text: false
};
