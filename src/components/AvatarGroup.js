import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Avatar, AvatarFallback } from './Avatar';

const AvatarGroupRow = styled(({ length, maxLength, size, ...rest }) => (
    <ul {...rest} />
))`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    margin: 0;
    padding: 0;
    height: ${(props) => props.size}px;
    width: ${(props) =>
        length > props.maxLength
            ? props.size * (props.maxLength + 1) * 0.85
            : props.length * props.size * 0.85}px;
    list-style: none;
    position: relative;
`;

const AvatarUnit = styled(
    ({ n, size, stroke, strokeWidth, strokeColor, type, ...rest }) => (
        <li {...rest} />
    )
)`
    background-color: ${(props) => props.theme.colors.background.default};
    ${(props) => props.type === 'Circle' && `border-radius: 100%;`}
    border: ${(props) =>
        `${props.strokeWidth || 3}px solid ${props.strokeColor ||
            props.theme.colors.background.default}`};
    margin: 0;
    padding: 0;
    position: absolute;
    top: 0;
    left: ${(props) => props.size * 0.8 * props.n}px;
    height: ${(props) => props.size}px;
    width: ${(props) => props.size}px;
`;

/**
 * Use `AvatarGroup` to display a series of user avatar images as a group.
 */

export const AvatarGroup = ({ maxLength, users, ...props }) => (
    <AvatarGroupRow
        length={users.length}
        maxLength={maxLength}
        size={props.size}
    >
        {users.length
            ? users.splice(0, maxLength).map((u, n) => (
                  <AvatarUnit
                      n={n}
                      key={u.hash || `__groupedAvatar_${n}`}
                      {...props}
                  >
                      <Avatar {...u} {...props} />
                  </AvatarUnit>
              ))
            : null}
        {users.length ? (
            <AvatarUnit n={maxLength} {...props}>
                <AvatarFallback
                    as={`div`}
                    hash={`avatarGroup_truncatedLabel`}
                    {...props}
                >
                    <span>+{Math.abs(users.length)}</span>
                </AvatarFallback>
            </AvatarUnit>
        ) : null}
    </AvatarGroupRow>
);

AvatarGroup.propTypes = {
    /** Length of avatars to truncate at, if necessary. */
    maxLength: PropTypes.number,
    solid: PropTypes.bool,
    size: PropTypes.number.isRequired,
    /** Enable a border around each individual avatar. */
    stroke: PropTypes.bool,
    strokeColor: PropTypes.string,
    strokeWidth: PropTypes.number,
    /** Shape to render individual avatars as. */
    type: PropTypes.oneOf(['Circle', 'Square']),
    /** List of users to map into the group. */
    users: PropTypes.array.isRequired
};

AvatarGroup.defaultProps = {
    maxLength: 5,
    size: 128,
    solid: false,
    stroke: false,
    type: 'Circle',
    users: []
};
