// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FeedbackCard from './../components/FeedbackCard';
import { TableCell } from './TableCell';
import UndrawNoData from './Illustrations/Undraw/NoData';
import UndrawNoDataAlt from './Illustrations/Undraw/NoDataAlt';
import { Heading } from './Typography';

const EmptyStateContainer = styled(({ ...rest }) => <div {...rest} />)`
    background: ${(props) => props.theme.colors.background.default};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3rem 1.33rem 2rem 1.33rem;
`;

export const TableEmptyState = ({ cols, error, ...props }) => {
    const a11yProps = {};

    return (
        <TableCell colSpan={cols}>
            <EmptyStateContainer {...a11yProps} {...props}>
                {RenderEmptyStateContent({ ...props })}
            </EmptyStateContainer>
        </TableCell>
    );
};

TableEmptyState.propTypes = {
    cols: PropTypes.number,
    error: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object,
        PropTypes.string
    ]),
    label: PropTypes.string,
    query: PropTypes.string
};

TableEmptyState.defaultProps = {
    error: false,
    query: ``
};

const RenderEmptyStateContent = ({ cols, error, label, query, ...rest }) => {
    if (error) {
        return <FeedbackCard error={error} />;
    }

    if (query) {
        return (
            <>
                <UndrawNoData height={`11.17rem`} />
                <Heading size={700}>
                    No {label} found matching &ldquo;{query}&rdquo;.
                </Heading>
            </>
        );
    }

    return (
        <>
            <UndrawNoDataAlt height={`11.17rem`} />
            <Heading size={700}>No {label} available.</Heading>
        </>
    );
};

RenderEmptyStateContent.propTypes = { ...TableEmptyState.propTypes };
