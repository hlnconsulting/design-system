// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Input } from './Input';
import { TextField } from './TextField';

export default {
    title: 'Elements|Form/Input Wrapper',
    component: Input
};

export const field = () => (
    <>
        <TextField id="story_field_input_00" name="story_field_input_00" />
        <br />
        <TextField
            id="story_field_input_01"
            name="story_field_input_01"
            prefix={<span>Prefix</span>}
        />
        <br />
        <TextField
            id="story_field_input_02"
            name="story_field_input_02"
            suffix={<span>Suffix</span>}
        />
        <br />
    </>
);

field.story = {
    name: 'Overview'
};
