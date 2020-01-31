/*
 *  Gradients
 */

const generateLinear = (breakpoints = [], inclination = 'to bottom') =>
    `linear-gradient(${inclination}, ${breakpoints.join(', ')})`;

export default {
    generateLinear
};
