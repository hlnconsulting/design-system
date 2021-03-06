import React, { PureComponent } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledRadioField = styled(({ checked, disabled, size, ...rest }) => (
    <div {...rest} />
))`
    position: relative;
    padding: 0 0 0 1.75rem;
    input[type='radio'] {
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
            border-radius: 100%;
            box-shadow: 0 0 0 1px
                ${(props) => props.theme.colors.border.default};
            box-sizing: border-box;
            left: 0.125rem;
            height: 1.125rem;
            width: 1.125rem;
        }

        ::after {
            border: 0;
            border-radius: 100%;
            background-color: ${(props) =>
                !props.disabled
                    ? props.theme.colors.icons.selected
                    : props.theme.colors.icons.muted};
            box-sizing: border-box;
            height: 0.75rem;
            left: 0.33rem;
            top: 0.7rem;
            transform: scale(${(props) => (props.checked ? 1 : 0)});
            transform-origin: center center;
            width: 0.75rem;
        }
    }
`;

const RadioField = ({
    id,
    name,
    value,
    checked,
    disabled,
    label,
    onChange,
    ...props
}) => {
    return (
        <StyledRadioField disabled={disabled} checked={checked} {...props}>
            <input
                type="radio"
                checked={checked}
                disabled={disabled}
                id={id}
                name={name}
                onChange={onChange}
                value={value}
            />
            <label htmlFor={id}>
                {typeof label === 'string' ? <span>{label}</span> : label}
            </label>
        </StyledRadioField>
    );
};

RadioField.propTypes = {
    disabled: PropTypes.bool,
    /**
     * For accesibility purposes, define a unique identifier for this field.
     */
    id: PropTypes.string.isRequired,
    /**
     * For accesibility purposes, define a unique name for this field.
     */
    name: PropTypes.string.isRequired,
    /**
     * Indicate if this `<RadioField />` should be marked as the current value.
     */
    checked: PropTypes.bool.isRequired,
    /**
     * Provide a label as a string or component.
     */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    /**
     * The unique value for this particular option.
     */
    value: PropTypes.string,
    /**
     * Define a callback function to be executed on user interaction.
     */
    onChange: PropTypes.func,
    /**
     * Change the size of the mock radio circle, and as they scale together,
     * the size of the accompanying label.
     */
    size: PropTypes.number
};

RadioField.defaultProps = {
    checked: false,
    disabled: false,
    onChange: () => null,
    size: 20
};

export { RadioField };
