import React from 'react';
import { withKnobs, select } from '@storybook/addon-knobs';

import { RadioField } from './RadioField';
import { RadioGroup } from './RadioGroup';

export default {
    title: 'Elements|Form/Radio Field',
    component: RadioField,
    subcomponents: { RadioGroup },
    decorators: [withKnobs]
};

const RadioGroupOptions = [
    {
        value: `opt0`,
        label: `Option 0`
    },
    {
        value: `opt1`,
        label: `Option 1`,
        disabled: true
    },
    {
        value: `opt2`,
        label: `Option 2`
    }
];

export const fieldBasic = () => (
    <RadioField
        id="sb_inputs_radio_basic"
        name="sb_inputs_radio_basic"
        checked
        label={<span>Radio Field</span>}
    />
);

fieldBasic.story = {
    name: 'Overview'
};

export const fieldGroup = () => (
    <RadioGroup
        id="sb_inputs_radio_group"
        name="sb_inputs_radio_group"
        options={RadioGroupOptions}
        selected={select(
            `Selected`,
            {
                'Option 0': `opt0`,
                'Option 1': `opt1`,
                'Option 2': `opt2`
            },
            `opt1`
        )}
    />
);

fieldGroup.story = {
    name: 'As a Group'
};

export const field = () => (
    <>
        <RadioField
            id="sb_inputs_radio_standard"
            name="sb_inputs_radio_standard"
            checked
            label={<span>Controlled Radio</span>}
        />
        <RadioField
            id="sb_inputs_radio_standard_unselected"
            name="sb_inputs_radio_standard_unselected"
            label={<span>Unselected Radio</span>}
        />
        <RadioField
            id="sb_inputs_radio_disabled"
            name="sb_inputs_radio_disabled"
            disabled
            label={<span>Disabled Radio</span>}
        />
        <RadioField
            id="sb_inputs_radio_disabled"
            name="sb_inputs_radio_disabled"
            disabled
            checked
            label={<span>Disabled Selected Radio</span>}
        />
    </>
);

field.story = {
    name: 'As a Standalone Input'
};
