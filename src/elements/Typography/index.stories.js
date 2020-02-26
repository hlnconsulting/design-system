import React from 'react';

import { Heading } from './Heading';
import { Paragraph } from './Paragraph';

export default {
    title: 'Elements|Typography',
    component: null,
    parameters: {
        componentSubtitle: `Simple typography elements to standardize appearance of text across components.`
    }
};

const overview = () => (
    <>
        <Heading>Sample heading</Heading>
        <Paragraph>
            This is some sample text inside of a paragraph element.
        </Paragraph>
    </>
);

overview.story = {
    name: 'Overview'
};
