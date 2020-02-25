import React, { PureComponent } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { RadioField } from './RadioField';

const RadioGroupComponent = styled(({ ...rest }) => <div {...rest} />)``;

/**
 * Higher-order-component of sorts for use with `<RadioField />`'s.
 */

const RadioGroup = ({ id, name, options, selected, ...props }) => {
    return (
        <RadioGroupComponent id={id}>
            {options.map((option, i) => (
                <RadioField
                    checked={selected === option.value}
                    id={`__ri_${name}_${i}`}
                    key={`__ri_${name}_${i}`}
                    name={name}
                    {...option}
                    {...props}
                />
            ))}
        </RadioGroupComponent>
    );
};

RadioGroup.propTypes = {
    disabled: PropTypes.bool,
    /**
     * For accesibility purposes, define a unique identifier for this radio group.
     */
    id: PropTypes.string.isRequired,
    /**
     * For accesibility purposes, define a unique name for each child `<RadioField />`.
     */
    name: PropTypes.string.isRequired,
    /**
     * An array of parameters to map as child `<RadioField />` elements, with
     * each option's parameters being mapped as props. "Checked" is controlled
     * by a comparison of `selected` prop, and an option's `value` param.
     */
    options: PropTypes.array.isRequired,
    /**
     * Indicate the value that is to be compared as the current selection.
     */
    selected: PropTypes.string,
    /**
     * Change the size of the mock radio circle, and as they scale together,
     * the size of the accompanying label.
     */
    size: PropTypes.number
};

RadioGroup.defaultProps = {
    size: 20
};

export { RadioGroup };
