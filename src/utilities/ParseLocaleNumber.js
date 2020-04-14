/**
 *  Given a localized number string (e.g. 1,337.69 or 1.337,69),
 *  return a parsed floating point value.
 *
 *  Inspired by https://stackoverflow.com/a/42213804
 *
 *  @param {string} s - The string to parse.
 *  @return {number} The parsed floating point value
 */

export const ParseLocaleNumber = (s) => {
    let s0 = (1111).toLocaleString().replace(/1/g, '');
    let s1 = (1.1).toLocaleString().replace(/1/g, '');

    return parseFloat(
        s
            .replace(/[^-.,0-9]+/g, '')
            .replace(new RegExp(`\\${s0}`, 'g'), '')
            .replace(new RegExp(`\\${s1}`, 'g'), '.')
    );
};
