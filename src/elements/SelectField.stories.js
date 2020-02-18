// eslint-disable-next-line no-unused-vars
import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import { FormField } from './../components/FormField';
import { SelectField } from './SelectField';

export default {
    title: 'Elements|Form/Select Input',
    component: SelectField,
    decorators: [withKnobs]
};

export const selectFieldDefault = () => (
    <>
        <FormField label="Label" labelFor="story_field_multiselect_input_00">
            <SelectField
                id="story_field_multiselect_input_00"
                name="story_field_multiselect_input_00"
                disabled={boolean(`Disabled`, false)}
                isMulti={boolean(`Multiple Options`, true)}
                isClearable={boolean(`Clearable`, true)}
                isLoading={boolean(`Loading Indicator`, false)}
                isSearchable={boolean(`Searchable`, true)}
                options={[
                    { value: `0`, label: `react` },
                    { value: `1`, label: `styled-components` },
                    { value: `2`, label: `react-redux` },
                    { value: `3`, label: `eslint` },
                    { value: `4`, label: `prettier` },
                    { value: `5`, label: `express` },
                    { value: `6`, label: `storybook` },
                    { value: `7`, label: `babel` },
                    { value: `8`, label: `lerna` },
                    { value: `9`, label: `jest` }
                ]}
            />
        </FormField>
        <br />
        <br />
    </>
);

selectFieldDefault.story = {
    name: 'Overview'
};

export const selectFieldGrouped = () => (
    <>
        <FormField label="Label" labelFor="story_field_multiselect_input_01">
            <SelectField
                id="story_field_multiselect_input_01"
                name="story_field_multiselect_input_01"
                closeMenuOnSelect={false}
                isMulti
                isClearable
                isSearchable={false}
                options={[
                    {
                        label: `Common`,
                        options: [
                            { value: `3`, label: `eslint` },
                            { value: `4`, label: `prettier` },
                            { value: `7`, label: `babel` },
                            { value: `8`, label: `lerna` },
                            { value: `9`, label: `jest` }
                        ]
                    },
                    {
                        label: `Frontend`,
                        options: [
                            { value: `0`, label: `react` },
                            {
                                value: `1`,
                                label: `styled-components`
                            },
                            {
                                value: `2`,
                                label: `react-redux`
                            },
                            { value: `6`, label: `storybook` }
                        ]
                    },
                    {
                        label: `Backend`,
                        options: [{ value: `5`, label: `express` }]
                    }
                ]}
            />
        </FormField>
        <br />
        <br />
    </>
);

selectFieldGrouped.story = {
    name: 'Grouped'
};
