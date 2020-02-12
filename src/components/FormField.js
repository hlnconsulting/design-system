// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormFieldWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: stretch;
    margin: 1rem 0;
`;

const FieldLabelWrapper = styled.label`
    display: flex;
    flex-direction: column;
    flex-basis: 25%;
    margin: 0.667rem 1.667rem 0.667rem 0;
    text-align: right;
`;

// eslint-disable-next-line handle-callback-err
const FieldLabel = styled(({ error, ...rest }) => <span {...rest} />)`
    color: ${(props) =>
        props.error
            ? props.theme.colors.intent.danger
            : props.theme.colors.text.default};
    font-family: ${(props) => props.theme.typography.fonts.ui};
    font-size: 1.066rem;
    font-weight: 500;
`;

const FieldSubtext = styled.span`
    color: ${(props) => props.theme.colors.text.muted};
    font-family: ${(props) => props.theme.typography.fonts.ui};
    font-size: 0.8rem;
    font-weight: 400;
`;

const FormFieldFullBasis = styled(({ ...rest }) => <div {...rest} />)`
    display: flex;
    flex-basis: 75%;
`;

const FormFieldFlexBlock = styled(({ basis, width, ...rest }) => (
    <div {...rest} />
))`
    flex-basis: ${(props) => props.basis || 100}%;
    max-width: ${(props) => `${props.width}rem` || `auto`};
`;

const RenderFormElementWithProps = (children, props) =>
    React.Children.map(children, (child) =>
        React.cloneElement(child, { ...props })
    );

export const FormField = ({
    basis,
    children,
    error,
    label,
    labelFor,
    subtext,
    width,
    ...props
}) => {
    const a11yProps = {
        htmlFor: labelFor
    };

    return (
        <FormFieldWrapper {...props}>
            <FieldLabelWrapper>
                {label && (
                    <FieldLabel error={!!error} {...a11yProps}>
                        {label}
                    </FieldLabel>
                )}
                {subtext && <FieldSubtext>{subtext}</FieldSubtext>}
            </FieldLabelWrapper>
            <FormFieldFullBasis>
                <FormFieldFlexBlock basis={basis} width={width}>
                    {RenderFormElementWithProps(children, {
                        error: error,
                        ...props
                    })}
                </FormFieldFlexBlock>
            </FormFieldFullBasis>
        </FormFieldWrapper>
    );
};

FormField.propTypes = {
    basis: PropTypes.number,
    changed: PropTypes.bool,
    children: PropTypes.node.isRequired,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
        PropTypes.string
    ]),
    label: PropTypes.node,
    labelFor: PropTypes.string.isRequired,
    readOnly: PropTypes.bool,
    subtext: PropTypes.node,
    width: PropTypes.number
};

FormField.defaultProps = {
    changed: false,
    error: false,
    readOnly: false
};
