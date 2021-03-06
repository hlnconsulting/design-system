// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { MaterialIcon } from './MaterialIcon';
import { Spinner } from './Spinner';

const ButtonOptions = {
    appearance: ['primary', 'secondary', 'tertiary'],
    size: ['sm', 'md', 'lg']
};

const ButtonLabel = styled.span`
    display: flex;
    color: inherit;
    font-family: ${(props) => props.theme.typography.fonts.ui};
    font-size: 0.9rem;
    font-weight: 600;
`;

const StyledButton = styled(
    ({
        appearance,
        hasIcon,
        iconPosition,
        interactive,
        loading,
        text,
        ...rest
    }) => <button {...rest} />
)`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
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
    min-height: ${(props) => (props.hasIcon ? `2.85rem` : `unset`)};
    padding: 0.42rem 0.667rem;
    user-select: none;

    :hover {
        background-color: ${(props) =>
            props.interactive ? props.theme.colors.background.tint : `inherit`};
        cursor: ${(props) => (props.interactive ? `pointer` : `default`)};
    }

    :active {
        background-color: ${(props) =>
            !props.disabled
                ? props.theme.colors.background.tintAlt
                : `inherit`};
    }

    i {
        margin: ${(props) =>
            props.iconPosition === 'left' ? `0 0.66rem 0 0` : `0 0 0 0.66rem`}
    }

    ${(props) =>
        props.appearance === 'primary' &&
        `
         background-color: ${
             props.text
                 ? props.disabled
                     ? props.theme.colors.background.tint
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
                     ? props.disabled
                         ? props.theme.colors.background.tint
                         : props.theme.colors.brand.P1
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
                    ? props.theme.colors.background.tint
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
                    ? props.disabled
                        ? props.theme.colors.background.tint
                        : props.theme.colors.brand.S1
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

/**
 * Buttons currently come in two flavors: `raised`, and `text`.
 *
 * They support a variety of options controlling apperance and functionality,
 * including loading states, icon and icon positions, and more.
 */

export const Button = ({
    appearance,
    children,
    disabled,
    href,
    icon,
    iconPosition,
    loading,
    ...props
}) => {
    const a11yProps = {};

    if (loading) {
        a11yProps['aria-busy'] = true;
        a11yProps['aria-label'] = 'Loading ...';
    }

    let renderIcon = loading ? (
        <PaddedSpinner
            position={iconPosition}
            primary={appearance === 'tertiary'}
            size={18}
        />
    ) : icon ? (
        <MaterialIcon icon={icon} />
    ) : (
        false
    );

    return (
        <StyledButton
            as={typeof href !== 'undefined' ? 'a' : 'button'}
            appearance={appearance}
            disabled={loading || disabled}
            hasIcon={!!icon}
            iconPosition={iconPosition}
            loading={loading}
            {...a11yProps}
            {...props}
        >
            {iconPosition === 'left' && renderIcon}
            <ButtonLabel>{children}</ButtonLabel>
            {iconPosition === 'right' && renderIcon}
        </StyledButton>
    );
};

Button.propTypes = {
    /**
     * Describes the color/intent of the overall button apperance.
     */
    appearance: PropTypes.oneOf([...ButtonOptions.appearance]).isRequired,
    /**
     * The component(s) to render within the styled button component.
     */
    children: PropTypes.node.isRequired,
    /**
     * Passes through to the actual DOM element to disable interaction, and
     * render a disabled state modified apperance.
     */
    disabled: PropTypes.bool,
    /**
     * If defined with a URL string, the button will act as an anchor element.
     */
    href: PropTypes.string,
    /**
     * The Material Design icon to render.
     *
     * For available icon options, please refer to the webfont documentation
     * for [Material Design Icons](https://material.io/resources/icons/?style=baseline).
     */
    icon: PropTypes.string,
    /**
     * Which side of the button children components (in a `flex-row` container)
     * should the icon be rendered.
     *
     * Controls both Material Icon and loading spinner placement.
     */
    iconPosition: PropTypes.oneOf(['left', 'right']),
    /**
     * Indicates to the user on `:hover` that the button is indeed a button.
     */
    interactive: PropTypes.bool,
    /**
     * Display a loading spinner/animation where an icon would normally reside.
     */
    loading: PropTypes.bool,
    /**
     * Function to be called when an onPress/onClick event is fired.
     */
    onClick: PropTypes.func,
    /**
     * Buttons come in three sizes, and the default label and icons will scale
     * automatically with these values.
     */
    size: PropTypes.oneOf([...ButtonOptions.size]),
    /**
     * If true, the button will be displayed as an inline text, that when
     * hovered/focused, reveals more of a true button apperance.
     */
    text: PropTypes.bool
};

Button.defaultProps = {
    appearance: 'tertiary',
    disabled: false,
    iconPosition: 'left',
    interactive: true,
    loading: false,
    size: 'md',
    text: false
};
