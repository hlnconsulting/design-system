// eslint-disable-next-line no-unused-vars
import React from 'react';

import { FormField } from './FormField';
import { Input } from './Input';
import { TextField } from './TextField';

export default {
    title: 'Components|Form/Input Wrapper',
    component: Input
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
