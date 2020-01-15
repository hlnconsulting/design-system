// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ControlDeckContainer = styled(({ ...rest }) => <div {...rest} />)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

const ControlDeckButtons = styled(({ ...rest }) => <div {...rest} />)``;

export const DataTableControlDeck = ({ buttons, ...props }) => {
    return (
        <ControlDeckContainer>
            <ControlDeckButtons>
                {buttons.length ? buttons.map((button, i) => button) : null}
            </ControlDeckButtons>
        </ControlDeckContainer>
    );
};

DataTableControlDeck.propTypes = {
    buttons: PropTypes.array
};

DataTableControlDeck.defaultProps = {
    buttons: []
};
