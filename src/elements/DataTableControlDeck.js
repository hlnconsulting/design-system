// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ControlDeckContainer = styled(({ ...rest }) => <div {...rest} />)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 1.33rem 0;
`;

const ControlDeckButtons = styled(({ ...rest }) => <div {...rest} />)`
    display: flex;
    flex-basis: 50%;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

const ControlDeckPartition = styled(({ ...rest }) => <div {...rest} />)`
    display: flex;
    flex-basis: 25%;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) => (props.alt ? `flex-end` : `flex-start`)};
`;

export const DataTableControlDeck = ({ buttons, ...props }) => {
    return (
        <ControlDeckContainer>
            <ControlDeckPartition />
            <ControlDeckButtons>
                {buttons.length ? buttons.map((button, i) => button) : null}
            </ControlDeckButtons>
            <ControlDeckPartition />
        </ControlDeckContainer>
    );
};

DataTableControlDeck.propTypes = {
    buttons: PropTypes.array
};

DataTableControlDeck.defaultProps = {
    buttons: []
};
