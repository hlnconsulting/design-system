import React, { PureComponent } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledComponent = styled.span`
    color: ${(props) => {
        if (typeof props.color !== 'undefined') {
            return (props) => props.theme.colors.text[props.color];
        }
        return props.size === 300
            ? (props) => props.theme.colors.text.muted
            : (props) => props.theme.colors.text.default;
    }};
    font-weight: 400;
    font-family: ${(props) => {
        if (typeof props.font !== 'undefined') {
            return (props) => props.theme.typography.fonts[props.font];
        }
        return props.size === 600
            ? (props) => props.theme.typography.fonts.display
            : (props) => props.theme.typography.fonts.ui;
    }};
    font-size: ${(props) => {
        switch (props.size) {
            case 600:
                return '20px';
            case 500:
                return '16px';
            case 400:
                return '14px';
            case 300:
                return '12px';
        }
    }};
    line-height: ${(props) => {
        switch (props.size) {
            case 600:
                return '24px';
            case 500:
            case 400:
                return '20px';
            case 300:
                return '16px';
        }
    }};
`;

class Text extends PureComponent {
    static propTypes = {
        semantic: PropTypes.string,
        size: PropTypes.oneOf([300, 400, 500, 600]).isRequired,
        font: PropTypes.oneOf(['display', 'ui', 'mono']),
        color: PropTypes.string
    };

    static defaultProps = {
        size: 400,
        semantic: 'span'
    };

    render() {
        const { semantic, ...props } = this.props;
        return <StyledComponent as={semantic} {...props} />;
    }
}

export { Text, StyledComponent };
