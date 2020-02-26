// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import Select from 'react-select';

import { Input } from './Input';

const SelectFieldInputOptions = {
    size: ['sm', 'md', 'lg'],
    sizeRatio: {
        sm: 0.83,
        md: 1,
        lg: 1.17
    }
};

const SelectGroupStyles = styled.div``;

const FormatGroupLabel = (data) => (
    <SelectGroupStyles>
        <span style={{ margin: 0 }}>{data.label}</span>
        {/* TODO: add group counter badge */}
    </SelectGroupStyles>
);

/**
 * Based on v3.0.8+ of `react-select`
 * ([documentation](https://react-select.com/home)),
 * the `<SelectField />` component is intended for use where
 * a user may need to:
 *
 * * select a single or group of values from a list
 *   * if multiple values are selected, remove selections
 * * search across possible values with dynamic filtering
 * * support for creatables (adding values on-the-fly)
 * * support for async network requests and loading of external datasets
 * * support for customizations in styling and utilization
 *
 * Please check the "Canvas" Storybook tab to explore the various props and
 * options offered in this customized implementation of `react-select`.
 *
 * Should a desired prop from `react-select`'s [list of props](https://react-select.com/props)
 * not be outlined below, or if you want to override one of our default values,
 * any additional props will be spread onto the `<Select />` component itself.
 */

export const SelectField = ({
    disabled,
    error,
    inputProps,
    prefix,
    size,
    suffix,
    ...props
}) => {
    const a11yProps = {};
    const inputPropsRemapped = {
        error: error,
        ...inputProps,
        prefix,
        suffix
    };
    const hlnThemeContext = useContext(ThemeContext);

    return (
        <Input {...inputPropsRemapped}>
            <Select
                formatGroupLabel={FormatGroupLabel}
                isDisabled={disabled}
                {...a11yProps}
                {...props}
                styles={{
                    container: (defaultStyles) => ({
                        ...defaultStyles,
                        flexGrow: 1,
                        flexBasis: `100%`,
                        color: hlnThemeContext.colors.text.default,
                        fontFamily: hlnThemeContext.typography.fonts.ui,
                        fontSize: `${SelectFieldInputOptions.sizeRatio[size] *
                            1.066}rem`,
                        fontWeight: 400,
                        lineHeight: `${SelectFieldInputOptions.sizeRatio[size] *
                            1.33}rem`
                    }),
                    control: (defaultStyles) => ({
                        ...defaultStyles,
                        background: `transparent`,
                        border: `none`,
                        borderRadius: `3px`,
                        boxSizing: `border-box`,
                        padding: `0.337rem 0`
                    })
                }}
                theme={(defaultTheme) => ({
                    ...defaultTheme,
                    colors: {
                        ...defaultTheme.colors,
                        primary: hlnThemeContext.colors.brand.P5,
                        primary25: hlnThemeContext.colors.brand.P1,
                        primary50: hlnThemeContext.colors.brand.P2,
                        primary75: hlnThemeContext.colors.brand.P3
                    }
                })}
            />
        </Input>
    );
};

SelectField.propTypes = {
    /**
     * Close the select menu when the user selects an option
     */
    closeMenuOnSelect: PropTypes.bool,
    disabled: PropTypes.bool,
    /**
     * **Please note,** that this is typically set at the `<FormField />`
     * level, and not on this lower level element component.
     *
     * There are three ways to indicate a field error: by bassing a boolean
     * value to render the label with red text, and add a red outline to
     * the input field (if applicable); by passing a string to be displayed
     * underneath the field; or by passing an object with a `body:` parameter
     * for the message to be displayed.
     *
     * We recommend for greatest forward flexibility, using the object option
     * where possible, as future extensibility of error status rendering will
     * be controlled through additional object parameters.
     *
     * ```javascript
     * {
     *   body: ``,
     * }
     * ```
     */
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
        PropTypes.string
    ]),
    /**
     * For accesibility purposes, define a unique identifier for this field.
     */
    id: PropTypes.string.isRequired,
    inputProps: PropTypes.object,
    /**
     * Enables a button by which to clear the current selection(s) with ease.
     */
    isClearable: PropTypes.bool,
    /**
     * Sets the underlying `react-select` controller in a loading state,
     * typically for use with async network calls.
     */
    isLoading: PropTypes.bool,
    /**
     * Support multiple selected options.
     */
    isMulti: PropTypes.bool,
    /**
     * Whether to enable search/filter functionality.
     */
    isSearchable: PropTypes.bool,
    /**
     * For accesibility and functional purposes, define a unique name for this field. This may be used in synthetic event propogation.
     */
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    /**
     * Array of options that populate the select menu.
     */
    options: PropTypes.array.isRequired,
    /**
     * Placeholder for the select value, e.g. "Select..."
     */
    placeholder: PropTypes.string,
    /**
     * Typically set at the `<FormField />` level, not here.
     *
     * A component to display _before_ the child input component.
     */
    prefix: PropTypes.node,
    /**
     * Scale the size of the select input itself.
     */
    size: PropTypes.oneOf([...SelectFieldInputOptions.size]),
    /**
     * Typically set at the `<FormField />` level, not here.
     *
     * A component to display _after_ the child input component.
     */
    suffix: PropTypes.node,
    /**
     * The value of the select; reflected by the selected option.
     */
    value: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};

SelectField.defaultProps = {
    checked: false,
    disabled: false,
    error: false,
    inputProps: {},
    onChange: () => null,
    options: [],
    size: 'md',
    type: 'text'
};
