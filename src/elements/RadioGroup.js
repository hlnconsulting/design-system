import React, { PureComponent } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { RadioField } from './RadioField';

const RadioGroupComponent = styled(({ ...rest }) => <div {...rest} />)``;

const RadioGroup = ({ id, name, onChange, options, selected, ...props }) => {
    return (
        <RadioGroupComponent id={id}>
            {options.map((option, i) => (
                <RadioField
                    checked={selected === option.value}
                    id={`__ri_${name}_${i}`}
                    key={`__ri_${name}_${i}`}
                    name={name}
                    onChange
                    {...option}
                    {...props}
                />
            ))}
        </RadioGroupComponent>
    );
};

RadioGroup.propTypes = {
    disabled: PropTypes.bool,
    id: PropTypes.string,
    name: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    selected: PropTypes.string,
    onChange: PropTypes.func,
    size: PropTypes.number
};

RadioGroup.defaultProps = {
    onChange: () => null,
    size: 20
};

export { RadioGroup };
