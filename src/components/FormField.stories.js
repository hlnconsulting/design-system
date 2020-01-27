// eslint-disable-next-line no-unused-vars
import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { FormField } from './FormField';
import { SelectField } from './../elements/SelectField';
import { TextField } from './../elements/TextField';

export default {
    title: 'Components|Form/Field',
    component: FormField,
    decorators: [withKnobs]
};

export const field = () => {
    const errorState = boolean(`Error State`, false);
    const readOnly = boolean(`Read Only`, false);

    return (
        <>
            <FormField
                error={errorState}
                label="<TextField />"
                labelFor="story_field_input_00"
                readOnly={readOnly}
            >
                <TextField
                    id="story_field_input_00"
                    name="story_field_input_00"
                />
            </FormField>
            <FormField
                error={
                    errorState
                        ? `This is an example of setting error state, with an error string.`
                        : false
                }
                label="<SelectField />"
                labelFor="story_field_input_01"
                subtext={`This is a fancy selector example, with a subtext prop passed.`}
            >
                <SelectField
                    id="story_field_input_01"
                    name="story_field_input_01"
                />
            </FormField>
        </>
    );
};

field.story = {
    name: 'Overview'
};
