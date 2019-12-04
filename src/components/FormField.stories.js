// eslint-disable-next-line no-unused-vars
import React from 'react';

import { FormField } from './FormField';

export default {
    title: 'Components|Form/Field',
    component: FormField
};

export const field = () => (
    <>
        <FormField label="Label" labelFor="story_field_input_00">
            Input
        </FormField>
    </>
);

field.story = {
    name: 'Overview'
};
