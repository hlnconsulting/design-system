# HLN Design System ![npm](https://img.shields.io/npm/v/@hln/design-system)

React based design system, with the goal of modernizing and streamlining the development of public health web applications by HLN Consulting, LLC and it's contractors.

### Installation

**Please note,** that this package is actively under development, and is not intended to be used in production environments at this time.

To begin using the HLN Design System, we first need to install a few dependencies.

We recommend using the [Yarn package manager](https://yarnpkg.com/) for installing from NPM, managing dependency workspaces, and running package scripts.

```bash
yarn add @hln/design-system styled-components
```

Alternatively, you may use NPM 5+ to install the design system package:

```bash
npm i @hln/design-system styled-components
```

### Exploring the Design System

-   **Components** contains off-the-shelf React components, ready for use in your application
-   **Elements** houses lower-level items that make up `components`, as well as commonplace UI elements such as Buttons, Icons, etc.
-   **Theme** is where you can find the included color palette for the active theme,

### Compatibility

| `@hln/design-system` | React   | React Native | Styled Components |
| -------------------- | ------- | ------------ | ----------------- |
| `<1.0 Unreleased`    | `^17.0` | `~0.63`      | `~5.1`            |

## Using Design System Components

As with most modern Javascript packages, we expose multiple entrypoints to import various classifications of components for use in your projects.

The categorization follows a very similar model to that of our Storybook, where we divide available imports into the three top level classifications outlined above as "Exploring the Design System."

##### A quick note on styling and `styled-components`

Due to issues from differences in versions used, the HLN Design System **does not** ship with a bundled version of [styled components](https://styled-components.com/), a wonderful library that allows us to use traditional CSS syntax, and mix it with JSX/ES6 to deliver highly modularized and build-optimized styling to applications. Please ensure you also install `styled-components` per the guidance above.

### Importing and using a component or element

Suppose you wish to use `<FeedbackCard />` in a component. First, we'd need to import our respective components and elements:

```diff
import React from 'react';
+ import { FeedbackCard } from '@hln/design-system/components';
```

Now, further down in your actual component `render`:

```diff
// ...

render = () => (
    <SomeStyledContainerComponent>
+        <FeedbackCard
+            feedback={{
+                heading: `Success!`,
+                message: `The operation was successful.`
+            }}
+        />
    </SomeStyledContainerComponent>
);

// ...
```

And like that, you've added a component from the HLN Design System into your application!

#### Advanced use case

Imagine we need our theme context to get the brand colors to style an external library's component, to be rendered inside of a dialog with a few action buttons.

Our imports will become a bit more complicated:

```diff
import React, { useContext } from 'react';
+ import { Dialog } from '@hln/design-system/components';
+ import { Button, DialogHeader, DialogFooter } from '@hln/design-system/elements';
+ import { ThemeContext } from 'styled-components';
// ...
+ import SomeExternalComponent from 'external-library';
```

...as will our render:

```javascript
// ...

render = () => {
    const theme = useContext(ThemeContext);

    return (
        <Dialog close={() => null} size="md" visible>
            <DialogHeader close={() => null}>Hello there.</DialogHeader>
            <DialogBody>
                <SomeExternalComponent color={theme.colors.brand.primary} />
                <p style={{ margin: `1.33rem 0 0 0` }}>
                    {`I'm a dialog. You can put whatever kind of content you'd like into me.`}
                </p>
            </DialogBody>
            <DialogFooter>
                <Button appearance="secondary" text>
                    Cancel
                </Button>
                <Button appearance="primary" text>
                    Continue
                </Button>
            </DialogFooter>
        </Dialog>
    );
};

// ...
```

By following these patterns, we hope that you can find using the HLN Design System straightforward and without too many roadblocks to achieving success.

### Implementing the provided `theme`

Components not looking the same as they do here on Storybook? Without providing the default theme to the bundled components and elements, you will notice that styling is quite broken.

Following the guidance of [styled components' Theming documentation](https://styled-components.com/docs/advanced#theming), we recommend two of the possible ways to pass in a theme bundled with the HLN Design System: through a `<ThemeProvider />` that wraps your primary React component, or via the `useContext` React hook.

#### `<ThemeProvider />`

Suppose your application has a single entry point, such as this simplified example:

```javascript
const App = () => (
    <MyAppContainer>
        <AppRouterOrNavigation />
    </MyAppContainer>
);
```

To have the `theme` in all child styled component instances, you would first import the styled component `<ThemeProvider />` and the desired theme(s) as follows:

```javascript
import { defaultTheme } from '@hln/design-system/themes';
import { ThemeProvider } from 'styled-components';
```

...and then add the `<ThemeProvider />` wrapper:

```diff
const App = () => (
+   <ThemeProvider theme={defaultTheme}>
        <MyAppContainer>
            <AppRouterOrNavigation />
        </MyAppContainer>
+   </ThemeProvider>
);
```

Now, when extending or using styled components in your application, you will have access to the `theme` prop, for example:

```javascript
const SomeStyledTextComponent = styled(({ ...rest }) => <span {...rest} />)`
    color: ${(prop) => prop.theme.colors.brand};
    font-size: 1.1rem;
    font-weight: 400;
`;
```

#### `useContext` React hook

Sometimes, you may want to use a value from the currently applied theme in your functional component, **without** needing this value for providing a styled attribute to itself. As the styled component library added support for [React Hooks](https://reactjs.org/docs/hooks-intro.html) in v4, this is very easy to implement.

```javascript
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const BasicComponent = () => {
    const theme = useContext(ThemeContext);

    console.log(`Active theme object: `, theme);
    // ...
};
```

## Contributing

As this package is actively under development, we are not actively seeking external contributors at this time.

## Additional Information

### Storybook

We utilize [Storybook](https://storybook.js.org/) to develop, audit, and document the various elements, components, and theming options that the HLN Design System affords developers.

To initialize your own Storybook environment, simply pull or fork the repository, install dependencies, and run:

```bash
yarn storybook
```

### Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [releases on this repository](https://github.com/hlnconsulting/design-system/releases).

### License

This package is licensed under the MIT License. For more information, refer to [LICENSE](https://github.com/hlnconsulting/design-system/blob/master/LICENSE) in the official repository.
