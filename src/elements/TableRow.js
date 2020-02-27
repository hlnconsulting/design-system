// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken, transparentize, transitions } from 'polished';

const StyledTr = styled(({ dsi, ...rest }) => <tr {...rest} />)`
    background-color: ${(props) => props.theme.colors.background.default};
    margin: 0;
    padding: 0;
    ${transitions(['background-color'], '0.2s ease-in 0.05s')};
    td {
        border: none;
        border-bottom: 1px solid ${(props) => props.theme.colors.border.default};
        ${(props) =>
            props.dsi
                ? `span { color: ${darken(
                      0.25,
                      props.dsi === 'created'
                          ? props.theme.colors.intent.success
                          : props.dsi === 'edited'
                          ? props.theme.colors.intent.info
                          : props.theme.colors.intent.danger
                  )}; text-decoration: ${
                      props.dsi === 'deleted' ? `line-through` : `none`
                  }; text-shadow: 0 1px 0 ${
                      props.dsi === 'created' || props.dsi === 'edited'
                          ? props.dsi === 'created'
                              ? transparentize(
                                    0.42,
                                    props.theme.colors.intent.success
                                )
                              : transparentize(
                                    0.42,
                                    props.theme.colors.intent.info
                                )
                          : `transparent`
                  }}`
                : ``}
    }
    :nth-child(2n) {
        background-color: ${(props) => props.theme.colors.background.tint};
    }
`;

export const TableRow = ({ children, ...props }) => {
    const a11yProps = {};

    return (
        <StyledTr {...a11yProps} {...props}>
            {children}
        </StyledTr>
    );
};

TableRow.propTypes = {
    children: PropTypes.node.isRequired
};

TableRow.defaultProps = {};
