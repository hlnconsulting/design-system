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
    flex-basis: 25%;
    margin: 0.667rem 1.667rem 0.667rem 0;
    text-align: right;
`;

const FieldLabel = styled.span`
    color: ${(props) => props.theme.colors.text.default};
    font-family: ${(props) => props.theme.typography.fonts.ui};
    font-size: 1.066rem;
    font-weight: 500;
`;

const FieldSubtext = styled.span`
    color: ${(props) => props.theme.colors.text.muted};
    font-family: ${(props) => props.theme.typography.fonts.ui};
    font-size: 0.966rem;
    font-weight: 400;
`;

export const FormField = ({ children, label, labelFor, subtext, ...props }) => {
    const a11yProps = {
        htmlFor: labelFor
    };

    return (
        <FormFieldWrapper {...props}>
            <FieldLabelWrapper>
                {label && <FieldLabel {...a11yProps}>{label}</FieldLabel>}
                {subtext && <FieldSubtext>{subtext}</FieldSubtext>}
            </FieldLabelWrapper>
            {children}
        </FormFieldWrapper>
    );
};

FormField.propTypes = {
    changed: PropTypes.bool,
    children: PropTypes.node.isRequired,
    label: PropTypes.node,
    labelFor: PropTypes.string.isRequired,
    subtext: PropTypes.node
};

FormField.defaultProps = {
    changed: false
};
