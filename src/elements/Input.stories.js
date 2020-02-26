// eslint-disable-next-line no-unused-vars
import React from 'react';

import { Input } from './Input';
import { TextField } from './TextField';

export default {
    title: 'Elements|Form/Input Wrapper',
    parameters: {
        componentSubtitle: `Represent common inputs with a standardized wrapper.`
    },
    component: Input
};

export const field = () => (
    <>
        <TextField id="story_field_input_00" name="story_field_input_00" />
        <br />
        <TextField
            id="story_field_input_01"
            name="story_field_input_01"
            readOnly
            value="I'm a read only input"
        />
        <br />
        <TextField
            id="story_field_input_02"
            name="story_field_input_02"
            prefix={<span>$</span>}
            suffix={<span>USD</span>}
            value={`1,337.00`}
        />
        <br />
    </>
);

field.story = {
    name: 'Overview'
};
