import { addDecorator, addParameters, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { create } from '@storybook/theming';

addDecorator(withA11y);

addParameters({
    options: {
        isFullscreen: false,
        showPanel: true,
        theme: create({
            base: 'light',
            brandTitle: 'HLN Design System',
            brandUrl: 'https://github.com/HLN-Consulting/design-system',
            gridCellSize: 12
        })
    }
});

configure(
    [
        require.context('../src', true, /\.stories\.mdx$/),
        require.context('../src', true, /\.stories\.js$/)
    ],
    module
);
