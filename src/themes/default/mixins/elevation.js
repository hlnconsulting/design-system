/*
 *  Elevation (like Android API).
 */

import { defaultTheme } from './../../';

const elevationStyles = [
    `0 0 1px {{borderShadow}}`,
    `0 0 1px {{borderShadow}}, 0 2px 4px -2px {{blurShadow}}`,
    `0 0 1px {{borderShadow}}, 0 5px 8px -4px {{blurShadow}}`,
    `0 0 1px {{borderShadow}}, 0 8px 10px -4px {{blurShadow}}`,
    `0 0 1px {{borderShadow}}, 0 16px 24px -8px {{blurShadow}}`
];

const renderElevation = (
    level = 0,
    borderShadow = defaultTheme.colors.neutral.N5A,
    blurShadow = defaultTheme.colors.neutral.N6A
) =>
    elevationStyles[level]
        .replace('{{borderShadow}}', borderShadow)
        .replace('{{blurShadow}}', blurShadow);

export default renderElevation;
