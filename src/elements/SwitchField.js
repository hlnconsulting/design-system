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
    span {
        font-family: ${(props) => props.theme.typography.fonts.ui};
        font-weight: 400;
    }
    div {
        cursor: pointer;
        ::before,
        ::after {
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%) ;
        }
        ::before {
            background: ${(props) =>
                props['aria-pressed']
                    ? props.theme.colors.brand.P5
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
        ${(props) => props['aria-pressed'] && `::after { right: 2px; }`}
`;

const SwitchField = ({
    checked,
    label,
    id,
    name,
    onChange,
    value,
    ...props
}) => {
    return (
        <StyledSwitchField
            aria-pressed={checked}
            id={id}
            name={name}
            {...{
                [isNative() ? `onPress` : `onClick`]: (e) =>
                    onChange({
                        target: {
                            id: id,
                            name: name,
                            value: value
                        }
                    })
            }}
            {...props}
        >
            <span>{label}</span>
            <div aria-hidden="true" />
        </StyledSwitchField>
    );
};

SwitchField.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    size: PropTypes.number
};

SwitchField.defaultProps = {
    checked: false,
    disabled: false,
    onBlur: () => null,
    onChange: () => null,
    onFocus: () => null,
    size: 20
};

export { SwitchField };
