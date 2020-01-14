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
        ...prefix,
        ...suffix
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
                            1.1}rem`
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
    closeMenuOnSelect: PropTypes.bool,
    disabled: PropTypes.bool,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
        PropTypes.string
    ]),
    id: PropTypes.string.isRequired,
    inputProps: PropTypes.object,
    isClearable: PropTypes.bool,
    isLoading: PropTypes.bool,
    isMulti: PropTypes.bool,
    isSearchable: PropTypes.bool,
    multiline: PropTypes.bool,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.array.isRequired,
    placeholder: PropTypes.string,
    prefix: PropTypes.node,
    size: PropTypes.oneOf([...SelectFieldInputOptions.size]),
    suffix: PropTypes.node,
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
