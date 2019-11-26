import { addDecorator, addParameters, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { create } from '@storybook/theming';

const req = require.context('../src', true, /\.stories\.(js|mdx)$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename));
}

addDecorator(withA11y);

addParameters({
    options: {
        isFullscreen: false,
        showPanel: true,
        theme: create({
            base: 'light',
            brandTitle: 'HLN UI Kit',
            brandUrl: 'https://github.com/HLN-Consulting/ui',
            gridCellSize: 12
        })
    }
});

configure(loadStories, module);
