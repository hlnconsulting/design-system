import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { CheckboxField } from './CheckboxField';

export default {
    title: 'Elements|Form/Checkbox Field',
    component: CheckboxField,
    decorators: [withKnobs]
};

export const field = () => (
    <>
        <CheckboxField
            id="sb_inputs_checkbox_standard"
            name="sb_inputs_checkbox_standard"
            checked={boolean(`Checked?`, true)}
            label={<span>Controlled Checkbox</span>}
        />
        <CheckboxField
            id="sb_inputs_checkbox_disabled"
            name="sb_inputs_checkbox_disabled"
            disabled
            label={<span>Disabled Checkbox</span>}
        />
    </>
);

field.story = {
    name: 'Overview'
};
