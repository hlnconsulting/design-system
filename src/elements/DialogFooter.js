// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { borderRadius } from 'polished';

const FooterContainer = styled(({ borderless, stacked, ...rest }) => (
    <div {...rest} />
))`
    background-color: ${(props) => props.theme.colors.background.default};
    ${(props) =>
        !props.borderless &&
        `border-top: 1px solid ${props.theme.colors.border.default}`};
    ${borderRadius(`bottom`, (props) => props.theme.constants.corner)};
    display: flex;
    flex-direction: ${(props) => (props.stacked ? `column` : `row`)};
    align-items: ${(props) => (props.stacked ? `flex-end` : `center`)};
    justify-content: ${(props) => (props.stacked ? `center` : `flex-end`)};
    padding: 1rem 1.337rem;
`;

export const DialogFooter = ({ children, ...props }) => {
    const a11yProps = {};

    return (
        <FooterContainer {...a11yProps} {...props}>
            {children}
        </FooterContainer>
    );
};

DialogFooter.propTypes = {
    /**
     * Defines if a border above the footer should be rendered.
     */
    borderless: PropTypes.bool,
    /**
     * Children node(s) to be rendered.
     */
    children: PropTypes.node,
    /**
     * Controls the flex direction and alignment of the children.
     *
     * If true, direction is set to column, and the children to be aligned
     * to `flex-end`, or the right of the footer.
     */
    stacked: PropTypes.bool
};

DialogFooter.defaultProps = {
    borderless: true,
    stacked: false
};
