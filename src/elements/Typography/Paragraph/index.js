import React, { PureComponent } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { StyledComponent as Text } from './../Text';

const StyledComponent = styled(({ size, ...rest }) => (
    <Text size={size} {...rest} />
))`
    line-height: ${(props) => {
        switch (props.size) {
            case 500:
                return '24px';
            case 400:
                return '21px';
            case 300:
                return '18px';
        }
    }};
`;

class Paragraph extends PureComponent {
    static propTypes = {
        semantic: PropTypes.string,
        size: PropTypes.oneOf([300, 400, 500]).isRequired,
        font: PropTypes.oneOf(['display', 'ui', 'mono']),
        color: PropTypes.string
    };

    static defaultProps = {
        size: 400,
        semantic: 'p'
    };

    render() {
        const { semantic, ...props } = this.props;
        return <StyledComponent as={semantic} {...props} />;
    }
}

export { Paragraph, StyledComponent };
