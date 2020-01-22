const colors = {
    brand: {
        P1: `#D4E5F3`,
        P2: `#9CC1E2`,
        P3: `#669ECD`,
        P4: `#428bca`,
        P5: `#337ab7`,
        P6: `#2e6da4`,
        P7: `#28669B`,
        P8: `#1E527E`,
        P9: `#153D60`,
        S1: `#E1E3E5`,
        S2: `#BABFC3`,
        S3: `#939AA0`,
        S4: `#899197`,
        S5: `#6c757d`,
        S6: `#565e64`,
        S7: `#5A6269`,
        S8: `#484E54`,
        S9: `#353B3F`
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
        N4A: `rgba(67, 90, 111, 0.14)`,
        N5A: `rgba(67, 90, 111, 0.25)`,
        N6A: `rgba(67, 90, 111, 0.36)`
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
        brand: colors.brand.P5,
        success: `#5cb85c`,
        info: `#5bc0de`,
        warning: `#f0ad4e`,
        danger: `#d9534f`,
        muted: colors.monochrome.MC5
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
