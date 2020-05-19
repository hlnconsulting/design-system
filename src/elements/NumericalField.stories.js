import React from 'react';

import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    text,
    boolean,
    select,
    number
} from '@storybook/addon-knobs';

import { FormField } from './../components/FormField';
import { NumericalField } from './NumericalField';

storiesOf('Elements|Form/Numerical Input', module)
    .addDecorator(withKnobs)
    .add('Default', () => {
        return (
            <FormField
                label={`Default Numerical Input`}
                labelFor="sb_inputs_numerical_default"
                name="sb_inputs_numerical_default"
            >
                <NumericalField
                    id="sb_inputs_numerical_default"
                    name="sb_inputs_numerical_default"
                    allowNegative={boolean(`Allow Negative?`, false)}
                    crementStep={number(`Crement Step Value`, 1)}
                    locale={select(
                        `Thousands Locale`,
                        {
                            'North American': `nam`,
                            European: `eu`,
                            'European (Alternative)': `eu-alt`,
                            'Disabled (Default)': `disabled`
                        },
                        `disabled`
                    )}
                    type={select(
                        `Input/Keyboard Type`,
                        {
                            Telephone: `tel`,
                            Password: `password`,
                            'Text (Default)': `text`
                        },
                        `text`
                    )}
                    decimalScale={number(`Decimal Scale`, 0)}
                    fixedDecimalScale={boolean(`Fixed Decimal Scale`, false)}
                    prefix={text(`Prefix`, ``)}
                    suffix={text(`Suffix`, ``)}
                />
            </FormField>
        );
    });
