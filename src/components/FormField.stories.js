// eslint-disable-next-line no-unused-vars
import React from 'react';

import { FormField } from './FormField';
import { TextField } from './../elements/TextField';

export default {
    title: 'Components|Form/Field',
    component: FormField
};

export const field = () => (
    <>
        <FormField label="Label" labelFor="story_field_input_00">
            <TextField id="story_field_input_00" name="story_field_input_00" />
        </FormField>
    </>
);

field.story = {
    name: 'Overview'
};
