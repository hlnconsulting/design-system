// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormFieldWrapper = styled.div``;

const FieldLabelWrapper = styled.label``;

const FieldLabel = styled.span``;

const FieldSubtext = styled.span``;

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
    children: PropTypes.node.isRequired,
    label: PropTypes.node,
    labelFor: PropTypes.string.isRequired,
    subtext: PropTypes.node
};

FormField.defaultProps = {};
