import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { SwitchField } from './SwitchField';

export default {
    title: 'Elements|Form/Switch Field',
    component: SwitchField,
    decorators: [withKnobs]
};

export const field = () => (
    <>
        <SwitchField
            id="sb_inputs_switch_standard"
            name="sb_inputs_switch_standard"
            label={`Controlled Toggle Switch`}
            checked={boolean(`Toggled?`, false)}
            onChange={action(`onChange`)}
        />
        <SwitchField
            checked
            id="sb_inputs_switch_checked"
            name="sb_inputs_switch_checked"
            label={`Checked Switch`}
            onChange={action(`onChange`)}
        />
        <SwitchField
            disabled
            id="sb_inputs_switch_disabled"
            name="sb_inputs_switch_disabled"
            label={`Disabled Switch`}
            onChange={action(`onChange`)}
        />
    </>
);

field.story = {
    name: 'Overview'
};
