import React, { PureComponent } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledComponent = styled(({ checked, disabled, size, ...rest }) => (
    <div {...rest} />
))`
    position: relative;
    padding: 0 0 0 1.75rem;
    input[type='checkbox'] {
        appearance: none;
        height: 1.125rem;
        opacity: 0.00001;
        position: absolute;
        left: 0;
        top: 0.33rem;
        width: 1.125rem;
        z-index: 2;
    }
    label {
        display: flex;
        flex-direction: row;
        padding: 0.5rem;
        ::before,
        ::after {
            position: absolute;
            content: ' ';
        }
        ::before {
            border: 1px solid ${(props) => props.theme.colors.border.default};
            border-radius: 3px;
            box-shadow: 0 0 0 1px
                ${(props) => props.theme.colors.border.default};
            box-sizing: border-box;
            left: 0.125rem;
            height: 1.125rem;
            width: 1.125rem;
        }
        ::after {
            border: 0;
            border-bottom: 3px solid
                ${(props) => props.theme.colors.icons.default};
            border-right: 3px solid
                ${(props) => props.theme.colors.icons.default};
            box-sizing: border-box;
            height: 0.825rem;
            left: 0.42rem;
            top: 0.5rem;
            transform: rotate(45deg)
                scale(${(props) => (props.checked ? 1 : 0)});
            transform-origin: center center;
            width: 0.5rem;
        }
    }
`;

const CheckboxField = ({
    id,
    name,
    value,
    checked,
    label,
    onChange,
    ...props
}) => {
    return (
        <StyledComponent checked={checked} {...props}>
            <input
                type="checkbox"
                checked={checked}
                id={id}
                name={name}
                onChange={onChange}
                value={value}
            />
            <label htmlFor={id}>{label}</label>
        </StyledComponent>
    );
};

CheckboxField.propTypes = {
    checked: PropTypes.bool.isRequired,
    disabled: PropTypes.bool,
    /**
     * For accesibility purposes, define a unique identifier for this checkbox.
     */
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    /**
     * Define a callback function to be triggered on user interaction.
     */
    onChange: PropTypes.func,
    size: PropTypes.number,
    value: PropTypes.string
};

CheckboxField.defaultProps = {
    checked: false,
    disabled: false,
    onChange: () => null,
    size: 20
};

export { CheckboxField };
