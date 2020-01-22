// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Button } from './Button';
import { ButtonRow } from './ButtonRow';
import { MaterialIcon } from './MaterialIcon';
import { TextField } from './TextField';

const ControlDeckContainer = styled(({ ...rest }) => <div {...rest} />)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 1.33rem 0;
`;

const ControlDeckButtons = styled(({ ...rest }) => <div {...rest} />)`
    display: flex;
    flex-basis: 33%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ControlDeckPartition = styled(({ alt, ...rest }) => <div {...rest} />)`
    display: flex;
    flex-basis: 33%;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) => (props.alt ? `flex-end` : `flex-start`)};
`;

const NumRowsController = styled(({ alt, ...rest }) => <div {...rest} />)`
    select {
        background: ${(props) => props.theme.colors.background.default};
        border: 1px solid ${(props) => props.theme.colors.border.muted};
        border-radius: 3px;
        box-sizing: border-box;
        box-shadow: 0 2px 0 ${(props) => props.theme.colors.neutral.N1A};
        margin: 0 0.33rem;
        padding: 0.33rem;
    }

    span {
        color: ${(props) => props.theme.colors.text.default};
        font-family: ${(props) => props.theme.typography.fonts.ui};
        font-size: 0.866rem;
        font-weight: 400;
    }
`;

const PaginationControls = styled(({ ...rest }) => <div {...rest} />)`
    display: flex;

    button {
        padding: 0.25rem 0.5rem;
    }
`;

const PaginationJumpTo = styled(({ ...rest }) => <Button {...rest} />)`
    display: flex;
    min-width: 10rem;

    span {
        display: flex;
        flex-direction: row;
        align-items: center;
        div {
            width: auto;
        }
    }
`;

const JumpToPageInput = styled(({ ...rest }) => <TextField {...rest} />)`
    padding: 0.33rem;
`;

export const DataTableControlDeck = ({
    buttons,
    pagination,
    plural,
    singular,
    ...props
}) => {
    return (
        <ControlDeckContainer>
            <ControlDeckPartition>
                {typeof pagination === 'object' && (
                    <NumRowsController>
                        <span>Show</span>
                        <select
                            onChange={(e) =>
                                pagination.setNumRows(e.target.value)
                            }
                            value={pagination.numRows}
                        >
                            {[10, 25, 50, 100].map((numRowOpt) => (
                                <option
                                    key={`numRowOpt_${numRowOpt}`}
                                    value={numRowOpt}
                                >
                                    {numRowOpt.toLocaleString()}
                                </option>
                            ))}
                        </select>
                        <span>{plural}</span>
                    </NumRowsController>
                )}
            </ControlDeckPartition>
            <ControlDeckButtons>
                {buttons.length ? buttons.map((button, i) => button) : null}
            </ControlDeckButtons>
            <ControlDeckPartition alt>
                {typeof pagination === 'object' && (
                    <PaginationControls>
                        <ButtonRow>
                            <Button
                                disabled={pagination?.backwardDisabled || false}
                                onClick={() => pagination.goToPage(0)}
                            >
                                <MaterialIcon
                                    icon={`first_page`}
                                    intent={
                                        pagination.backwardDisabled
                                            ? `muted`
                                            : `brand`
                                    }
                                />
                            </Button>
                            <Button
                                disabled={pagination?.backwardDisabled || false}
                                onClick={pagination.backward}
                            >
                                <MaterialIcon
                                    icon={`chevron_left`}
                                    intent={
                                        pagination.backwardDisabled
                                            ? `muted`
                                            : `brand`
                                    }
                                />
                            </Button>
                            <PaginationJumpTo interactive={false}>
                                <JumpToPageInput
                                    autoComplete="off"
                                    id="pagination_control_dtcd_jump_to"
                                    maxLength={pagination.numPages.length}
                                    min={1}
                                    max={pagination.numPages}
                                    name="pagination_control_dtcd_jump_to"
                                    onChange={(e) =>
                                        pagination.goToPage(e.target.value - 1)
                                    }
                                    type="number"
                                    value={pagination.pageIndex + 1}
                                    valueAlign="center"
                                />
                                <span>
                                    &nbsp;&nbsp;of&nbsp;
                                    {pagination.numPages.toLocaleString()}
                                </span>
                            </PaginationJumpTo>
                            <Button
                                disabled={pagination?.forwardDisabled || false}
                                onClick={pagination.forward}
                            >
                                <MaterialIcon
                                    icon={`chevron_right`}
                                    intent={
                                        pagination.forwardDisabled
                                            ? `muted`
                                            : `brand`
                                    }
                                />
                            </Button>
                            <Button
                                disabled={pagination?.forwardDisabled || false}
                                onClick={() =>
                                    pagination.goToPage(pagination.numPages - 1)
                                }
                            >
                                <MaterialIcon
                                    icon={`last_page`}
                                    intent={
                                        pagination.forwardDisabled
                                            ? `muted`
                                            : `brand`
                                    }
                                />
                            </Button>
                        </ButtonRow>
                    </PaginationControls>
                )}
            </ControlDeckPartition>
        </ControlDeckContainer>
    );
};

DataTableControlDeck.propTypes = {
    buttons: PropTypes.array,
    pagination: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
    plural: PropTypes.string,
    singular: PropTypes.string
};

DataTableControlDeck.defaultProps = {
    buttons: [],
    pagination: false
};
