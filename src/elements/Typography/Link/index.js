import React, { PureComponent } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StyledComponent as Text } from './../Text';

const HyperTextLink = styled(({ underline, ...rest }) => <Text {...rest} />)`
    text-decoration: ${(props) => (props.underline ? `underline` : `none`)};
    &:hover {
        text-decoration: ${(props) =>
            !props.underline ? `underline` : `none`};
    }
`;

class Link extends PureComponent {
    static propTypes = {
        ...Text.propTypes,
        href: PropTypes.string,
        rel: PropTypes.string,
        target: PropTypes.string,
        underline: PropTypes.bool
    };

    static defaultProps = {
        rel: 'noopener noreferrer',
        underline: true
    };

    render() {
        return <HyperTextLink as="a" {...this.props} />;
    }
}

export { Link };
