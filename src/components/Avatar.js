import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const generateAvatarInitials = (name) => {
    if (!name || typeof name !== 'string') return `?`;
    return name
        .replace(/\s+/, ' ')
        .split(' ')
        .slice(0, 2)
        .map((v) => v && v[0].toUpperCase())
        .join('');
};

const getHashCode = (string) =>
    Math.abs(
        string
            .split('')
            .reduce(
                (prevHash, currVal) =>
                    ((prevHash << 5) - prevHash + currVal.charCodeAt(0)) | 0,
                0
            )
    );

const availableAvatarColors = [
    { default: { bg: `B4`, fg: `B9` }, solid: { bg: `B8`, fg: `B0` } },
    { default: { bg: `G4`, fg: `G9` }, solid: { bg: `G8`, fg: `G0` } },
    { default: { bg: `O4`, fg: `O9` }, solid: { bg: `O8`, fg: `O0` } },
    { default: { bg: `P2`, fg: `P9` }, solid: { bg: `P8`, fg: `P0` } },
    { default: { bg: `R2`, fg: `R9` }, solid: { bg: `R8`, fg: `R0` } },
    { default: { bg: `Y3`, fg: `Y9` }, solid: { bg: `Y8`, fg: `Y0` } }
];

const generateAvatarColor = (string) =>
    availableAvatarColors[getHashCode(string) % availableAvatarColors.length];

const AvatarImage = styled(({ size, type, ...rest }) => <img {...rest} />)`
    display: inline-block;
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    ${(props) => props.type === 'Circle' && `border-radius: 100%;`}
`;

const AvatarFallback = styled(({ hash, name, size, type, ...rest }) => (
    <div {...rest} />
))`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${(props) =>
        props.theme.colors.scales[
            generateAvatarColor(!props.hash ? props.name : props.hash)[
                props.solid ? `solid` : `default`
            ].bg
        ]};
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
    ${(props) => props.type === 'Circle' && `border-radius: 100%;`}

    span {
        color: ${(props) =>
            props.theme.colors.scales[
                generateAvatarColor(!props.hash ? props.name : props.hash)[
                    props.solid ? `solid` : `default`
                ].fg
            ]};
        font-family: ${(props) => props.theme.typography.fonts.mono};
        font-size: ${(props) => props.size * 0.42}px;
        user-select: none;
    }
`;

const Avatar = ({ hash, name, src, ...props }) => {
    // Avatar without source, possibly without name
    if (typeof hash !== 'undefined' && !src.length) {
        let parsedName = generateAvatarInitials(
            typeof name === 'undefined' || !name.length ? `?` : name
        );

        const fallbackProps = {
            as: `div`,
            hash: hash,
            name: parsedName
        };

        return (
            <AvatarFallback {...props} {...fallbackProps}>
                <span>{parsedName}</span>
            </AvatarFallback>
        );
    }

    // Avatar with image source
    return <AvatarImage src={src} alt={name} {...props} />;
};

Avatar.defaultProps = {
    size: 128,
    solid: false,
    type: 'Circle'
};

Avatar.propTypes = {
    hash: PropTypes.string.isRequired, // UUID or something to act as a name
    solid: PropTypes.bool,
    src: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    size: PropTypes.number,
    type: PropTypes.oneOf(['Circle', 'Square']),
    label: PropTypes.string
};

export { Avatar, AvatarImage, AvatarFallback };
