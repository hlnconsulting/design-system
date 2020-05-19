import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';

import { TextField } from './TextField';
import { ParseLocaleNumber } from './../utilities/';

const NumericalField = ({ crementStep, locale, ...props }) => {
    const crementValue = (e) => {
        if (e.key === `ArrowDown` || e.key === `ArrowUp`) {
            this.props.onChange({
                target: {
                    id: e.nativeEvent.target.id || null,
                    name: e.nativeEvent.target.name || null,
                    value: Number(
                        ParseLocaleNumber(e.nativeEvent.target.value) +
                            (e.key === `ArrowUp`
                                ? this.props.crementStep
                                : -this.props.crementStep)
                    )
                }
            });
        }
    };

    let thousandSeparator, decimalSeparator;
    switch (locale) {
        case 'eu':
            thousandSeparator = `.`;
            decimalSeparator = `,`;
            break;
        case 'eu-alt':
            thousandSeparator = ` `;
            decimalSeparator = `,`;
            break;
        case 'nam':
            thousandSeparator = `,`;
            decimalSeparator = `.`;
            break;
        case 'disabled':
        default:
            thousandSeparator = ``;
            decimalSeparator = `.`;
    }

    return (
        <NumberFormat
            customInput={TextField}
            thousandSeparator={thousandSeparator}
            decimalSeparator={decimalSeparator}
            isNumericString
            onKeyUp={crementValue}
            {...props}
        />
    );
};

NumericalField.propTypes = {
    // React-Number-Format Props
    allowEmptyFormatting: PropTypes.bool,
    allowNegative: PropTypes.bool,
    decimalScale: PropTypes.number,
    decimalSeparator: PropTypes.string,
    defaultValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    fixedDecimalScale: PropTypes.bool,
    thousandSeparator: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    thousandsGroupStyle: PropTypes.oneOf(['thousand', 'lakh', 'wan']),
    format: PropTypes.string,
    mask: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    prefix: PropTypes.string,
    suffix: PropTypes.string,
    type: PropTypes.oneOf(['text', 'tel', 'password']),
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    // Custom Props
    autoComplete: PropTypes.string,
    crementStep: PropTypes.number,
    inputmode: PropTypes.string,
    locale: PropTypes.oneOf(['disabled', 'nam', 'eu', 'eu-alt']),
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    pattern: PropTypes.string
};

NumericalField.defaultProps = {
    allowEmptyFormatting: true,
    allowNegative: false,
    autoComplete: 'off',
    crementStep: 1,
    inputmode: 'numeric',
    thousandsGroupStyle: 'thousand',
    type: 'text',
    locale: 'disabled',
    onChange: () => null,
    pattern: '[0-9]*'
};

export { NumericalField };
