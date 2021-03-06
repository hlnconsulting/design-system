import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const isNative = () => false;

const StyledSwitchField = styled(({ size, ...rest }) => <button {...rest} />)`
    background-color: transparent;
    border: none;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    position: relative;
    margin: 0.66rem 0;
    outline: none;
    height: ${(props) => props.size + 2}px;
    width: 100%;
`;

const SwitchFieldLabel = styled(({ active, alt, ...rest }) => (
    <span {...rest} />
))`
    color: ${(props) =>
        props.active
            ? props.theme.colors.brand.P9
            : props.theme.colors.text.default};
    flex-grow: 2;
    font-family: ${(props) => props.theme.typography.fonts.ui};
    font-weight: 400;
    text-align: ${(props) => (props.alt ? `right` : `left`)};
    text-shadow: ${(props) =>
        props.active ? `1px 0 0 ${props.theme.colors.brand.P9}` : `none`};
`;

const SwitchFieldActualContainer = styled(({ mutliLabel, ...rest }) => (
    <div {...rest} />
))`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    justify-content: ${(props) => (props.mutliLabel ? `center` : `flex-end`)};
`;

const SwitchFieldActual = styled(
    ({ checked, disabled, radioMode, size, ...rest }) => <div {...rest} />
)`
    cursor: ${(props) => (props.disabled ? `not-allowed` : `pointer`)};
    position: relative;
    width: ${(props) => props.size * 3.05}px;
    ::before,
    ::after {
        content: '';
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    ::before {
        background: ${(props) =>
            props.checked || props.radioMode
                ? props.theme.colors.brand.P5
                : props.disabled
                ? props.theme.colors.brand.P1
                : props.theme.colors.background.tint};
        border: 1px solid ${(props) => props.theme.colors.border.default};
        border-radius: 10px;
        box-shadow: ${(props) => props.theme.elevation(0)};
        height: ${(props) => props.size}px;
        width: ${(props) => props.size * 3}px;
        transition: background 0.2s ease-in-out;
        right: 0;
    }
    ::after {
        background: ${(props) => props.theme.colors.fixed.white};
        border-radius: 100%;
        box-shadow: ${(props) => props.theme.elevation(1)};
        height: ${(props) => props.size - 4}px;
        width: ${(props) => props.size - 4}px;
        margin: 0 0.133rem;
        transition: right 0.1825s ease-in-out;
        right: ${(props) => props.size * 2}px;
    }
    ${(props) => props.checked && `::after { right: 2px; }`}
`;

const SwitchField = ({
    checked,
    disabled,
    label,
    id,
    name,
    onChange,
    radioMode,
    size,
    ...props
}) => {
    return (
        <StyledSwitchField
            aria-pressed={checked}
            disabled={disabled}
            id={id}
            name={name}
            size={size}
            {...{
                [isNative() ? `onPress` : `onClick`]: (e) =>
                    onChange({
                        target: {
                            id: id,
                            name: name,
                            value: !!checked
                        }
                    })
            }}
            {...props}
        >
            <SwitchFieldLabel active={typeof label === 'object' && !checked}>
                {typeof label === 'object' && label.length === 2
                    ? label[0]
                    : label}
            </SwitchFieldLabel>
            <SwitchFieldActualContainer mutliLabel={typeof label !== 'string'}>
                <SwitchFieldActual
                    aria-hidden="true"
                    checked={checked}
                    disabled={disabled}
                    radioMode={radioMode}
                    size={size}
                />
            </SwitchFieldActualContainer>
            {typeof label === 'object' && label.length === 2 && (
                <SwitchFieldLabel
                    active={typeof label === 'object' && checked}
                    alt
                >
                    {label[1]}
                </SwitchFieldLabel>
            )}
        </StyledSwitchField>
    );
};

SwitchField.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    /**
     * Similar in execution to Radio fields.
     */
    checked: PropTypes.bool.isRequired,
    /**
     * Pass a string, or when `radioMode` is enabled, an array of two strings,
     * to be rendered as an accesible label for this toggle switch field.
     */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
    onBlur: PropTypes.func,
    /**
     * Callback function that is passed a synthetic event based on user interaction.
     */
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    /**
     * Enables the ability to have a label for the checked and unchecked value,
     * and an alternate weight is assigned to the currently "selected" label.
     */
    radioMode: PropTypes.bool,
    /**
     * Scale the toggle and label.
     */
    size: PropTypes.number
};

SwitchField.defaultProps = {
    checked: false,
    disabled: false,
    onBlur: () => null,
    onChange: () => null,
    onFocus: () => null,
    radioMode: false,
    size: 20
};

export { SwitchField };
