const colors = {
    brand: {
        P4: `#428bca`,
        P5: `#337ab7`,
        P6: `#2e6da4`,
        S4: `#899197`,
        S5: `#6c757d`,
        S6: `#565e64`
    },
    monochrome: {
        MC0: `#ffffff`,
        MC05: `#fafafa`,
        MC1: `#eeeeee`,
        MC2: `#bababa`,
        MC3: `#777777`,
        MC5: `#555555`,
        MC7: `#333333`,
        MC9: `#222222`,
        MC10: `#000000`
    },
    neutral: {
        N0A: `rgba(255, 255, 255, 0.06)`,
        N1A: `rgba(67, 90, 111, 0.04)`,
        N2A: `rgba(67, 90, 111, 0.06)`,
        N3A: `rgba(67, 90, 111, 0.09)`,
        N4A: `rgba(67, 90, 111, 0.14)`
    }
};

const fuzzyColors = {
    background: {
        default: colors.monochrome.MC0,
        tint: colors.monochrome.MC05,
        tintAlt: colors.monochrome.MC1,
        field: colors.monochrome.MC1
    },
    border: {
        default: colors.neutral.N4A,
        muted: colors.neutral.N3A
    },
    fixed: {
        black: colors.monochrome.MC10,
        white: colors.monochrome.MC0
    },
    intent: {
        success: `#5cb85c`,
        info: `#5bc0de`,
        warning: `#f0ad4e`,
        danger: `#d9534f`
    },
    text: {
        default: colors.monochrome.MC7,
        dark: colors.monochrome.MC9,
        muted: colors.monochrome.MC5
    }
};

export default {
    ...colors,
    ...fuzzyColors
};
