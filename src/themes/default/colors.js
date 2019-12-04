const colors = {
    brand: {
        P4: `#428bca`,
        P5: `#337ab7`,
        P6: `#2e6da4`
    },
    monochrome: {
        MC0: `#ffffff`,
        MC1: `#eeeeee`,
        MC2: `#bababa`,
        MC3: `#777777`,
        MC5: `#555555`,
        MC7: `#333333`,
        MC9: `#222222`,
        MC10: `#000000`
    }
};

const fuzzyColors = {
    background: {
        default: colors.monochrome.MC0,
        tint: colors.monochrome.MC1,
        tintAlt: colors.monochrome.MC2,
        field: colors.monochrome.MC1
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
