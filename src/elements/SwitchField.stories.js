import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { SwitchField } from './SwitchField';

export default {
    title: 'Elements|Form/Switch Field',
    parameters: {
        componentSubtitle: `An accessible alternative to an "on/off" style Radio group.`
    },
    component: SwitchField,
    decorators: [withKnobs]
};

export const field = () => (
    <SwitchField
        id="sb_inputs_switch_default"
        name="sb_inputs_switch_default"
        label={`Toggle Switch`}
        checked={boolean(`Toggled?`, false)}
        onChange={action(`onChange`)}
    />
);

field.story = {
    name: 'Overview'
};

export const fieldControlled = () => (
    <SwitchField
        id="sb_inputs_switch_standard"
        name="sb_inputs_switch_standard"
        label={`Controlled Toggle Switch`}
        checked={boolean(`Toggled?`, false)}
        onChange={action(`onChange`)}
    />
);

fieldControlled.story = {
    name: 'Unchecked'
};

export const fieldChcked = () => (
    <SwitchField
        checked
        id="sb_inputs_switch_checked"
        name="sb_inputs_switch_checked"
        label={`Checked Switch`}
    />
);

fieldChcked.story = {
    name: 'Checked'
};

export const fieldDisabled = () => (
    <SwitchField
        disabled
        id="sb_inputs_switch_disabled"
        name="sb_inputs_switch_disabled"
        label={`Disabled Switch`}
    />
);

fieldDisabled.story = {
    name: 'Disabled'
};

export const fieldRadioMode = () => (
    <SwitchField
        checked={boolean(`Toggled?`, false)}
        id="sb_inputs_switch_checked"
        name="sb_inputs_switch_checked"
        label={[`Label 0`, `Label 1`]}
        radioMode
    />
);

fieldRadioMode.story = {
    name: 'Radio Mode'
};
