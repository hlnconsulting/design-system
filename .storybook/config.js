import { addDecorator, addParameters, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { create } from '@storybook/theming';
import { withThemesProvider } from 'storybook-addon-styled-component-theme';

import sctpd from './styled-component-theme-provider-decorator';
import { defaultTheme } from './../src/themes/';

const themes = [defaultTheme];

addDecorator(withA11y);
addDecorator(sctpd);
//addDecorator(withThemesProvider(themes));

addParameters({
    options: {
        isFullscreen: false,
        showPanel: true,
        storySort: (a, b) =>
            a[1].kind === b[1].kind
                ? 0
                : a[1].id.startsWith(`overview`)
                ? -1
                : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
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
