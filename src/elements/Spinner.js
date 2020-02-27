import React, { PureComponent } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * Inspired by
 * https://codepen.io/mrrocks/pen/EiplA
 * @type {StyledComponent}
 */
const IndeterminateSpinner = styled(
    ({ color, id, options, primary, ...rest }) => <svg {...rest} />
)`
    animation: rotator ${(props) => props.options.duration}s linear infinite;

    @keyframes rotator {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(270deg);
        }
    }

    .is_p {
        stroke-dasharray: ${(props) => props.options.offset};
        stroke-dashoffset: 0;
        transform-origin: center;
        animation: dash ${(props) => props.options.duration}s ease-in-out
                infinite,
            is_colors_${(props) => props.id} ${(props) =>
    props.options.duration * 4}s ease-in-out
                infinite;
    }

    @keyframes is_colors_${(props) => props.id} {
        0% {
            stroke: ${(props) =>
                props.primary
                    ? props.theme.colors.brand.P5
                    : props.color
                    ? props.color
                    : props.theme.colors.background.default};
        }
        25% {
            stroke: ${(props) =>
                props.primary
                    ? props.theme.colors.brand.P3
                    : props.color
                    ? props.color
                    : props.theme.colors.background.default};
        }
        50% {
            stroke: ${(props) =>
                props.primary
                    ? props.theme.colors.brand.S5
                    : props.color
                    ? props.color
                    : props.theme.colors.background.default};
        }
        75% {
            stroke: ${(props) =>
                props.primary
                    ? props.theme.colors.brand.P3
                    : props.color
                    ? props.color
                    : props.theme.colors.background.default};
        }
        100% {
            stroke: ${(props) =>
                props.primary
                    ? props.theme.colors.brand.P5
                    : props.color
                    ? props.color
                    : props.theme.colors.background.default};
        }
    }

    @keyframes dash {
        0% {
            stroke-dashoffset: ${(props) => props.options.offset};
        }
        50% {
            stroke-dashoffset: ${(props) => props.options.offset / 4};
            transform: rotate(135deg);
        }
        100% {
            stroke-dashoffset: ${(props) => props.options.offset};
            transform: rotate(450deg);
        }
    }
`;

const Spinner = ({ size, ...props }) => {
    return (
        <IndeterminateSpinner
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 66 66"
            height={size}
            width={size}
            {...props}
        >
            <circle
                className="is_p"
                fill="none"
                strokeWidth="6"
                strokeLinecap="round"
                cx="33"
                cy="33"
                r="30"
            />
        </IndeterminateSpinner>
    );
};

Spinner.propTypes = {
    theme: PropTypes.object,
    color: PropTypes.string,
    options: PropTypes.object,
    primary: PropTypes.bool,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

Spinner.defaultProps = {
    options: {
        duration: 1.4,
        offset: 187
    },
    primary: false
};

export { Spinner };
