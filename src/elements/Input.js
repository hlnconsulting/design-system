// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { borderRadius, lighten } from 'polished';

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: stretch;
    width: 100%;
`;

// eslint-disable-next-line handle-callback-err
const InputWrapper = styled(({ disabled, error, readOnly, ...rest }) => (
    <div {...rest} />
))`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: stretch;
    background: ${(props) =>
        props.disabled
            ? props.theme.colors.background.tint
            : props.theme.colors.background.default};
    border: 1px solid
        ${(props) =>
            props.readOnly
                ? `transparent`
                : props.error
                ? props.theme.colors.intent.danger
                : props.theme.colors.border.muted};
    border-radius: 3px;
    box-sizing: border-box;
    box-shadow: 0 2px 0
        ${(props) =>
            props.readOnly
                ? `transparent`
                : props.error
                ? lighten(0.33, props.theme.colors.intent.danger)
                : props.theme.colors.neutral.N1A};
    overflow: visible;
    margin: 0;
    padding: 0;
    position: relative;
`;

const InputPrefixSuffix = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
    background: ${(props) => props.theme.colors.background.tint};
    border-right: 1px solid ${(props) => props.theme.colors.border.muted};
    ${borderRadius('left', '3px')}
    box-sizing: border-box;
    box-shadow: 2px 0 0 ${(props) => props.theme.colors.neutral.N1A};
    overflow: visible;
    padding: 0 0.667rem;
`;

const InputErrorText = styled.p`
    color: ${(props) => props.theme.colors.intent.danger};
    font-family: ${(props) => props.theme.typography.fonts.ui};
    font-size: 0.8rem;
    font-weight: 400;
    margin: 0.33rem 0;
`;

export const Input = ({ children, error, prefix, suffix, ...props }) => {
    return (
        <InputContainer>
            <InputWrapper error={!!error} {...props}>
                {prefix && <InputPrefixSuffix>{prefix}</InputPrefixSuffix>}
                {children}
                {suffix && <InputPrefixSuffix>{suffix}</InputPrefixSuffix>}
            </InputWrapper>
            {(typeof error === 'string' || typeof error === 'object') && (
                <InputErrorText>{error?.body || error}</InputErrorText>
            )}
        </InputContainer>
    );
};

Input.propTypes = {
    children: PropTypes.node.isRequired,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
        PropTypes.string
    ]),
    prefix: PropTypes.node,
    readOnly: PropTypes.bool,
    suffix: PropTypes.node
};

Input.defaultProps = {
    error: false,
    readOnly: false
};
