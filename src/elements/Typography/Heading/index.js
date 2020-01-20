import React, { PureComponent } from 'react'; // eslint-disable-line no-unused-vars
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledComponent = styled(({ size, ...rest }) => <h2 {...rest} />)`
    font-family: ${(props) =>
        props.size > 500
            ? (props) => props.theme.typography.fonts.display
            : (props) => props.theme.typography.fonts.ui};
    color: ${(props) =>
        props.size > 200
            ? (props) => props.theme.colors.text.dark
            : (props) => props.theme.colors.text.muted};
    ${(props) => {
        switch (props.size) {
            case 900:
                return `font-size: 35px;
                        font-weight: 500;
                        line-height: 40px;
                        letter-spacing: -0.2px;
                        margin-top: 52px;`;
            case 800:
                return `font-size: 29px;
                        font-weight: 500;
                        line-height: 32px;
                        letter-spacing: -0.07px;
                        margin-top: 40px;`;
            case 700:
                return `font-size: 24px;
                        font-weight: 500;
                        line-height: 28px;
                        letter-spacing: -0.07px;
                        margin-top: 40px;`;
            case 600:
                return `font-size: 20px;
                        font-weight: 500;
                        line-height: 24px;
                        letter-spacing: -0.07px;
                        margin-top: 28px;`;
            case 500:
                return `font-size: 16px;
                        font-weight: 500;
                        line-height: 20px;
                        letter-spacing: -0.05px;
                        margin-top: 24px;`;
            case 400:
                return `font-size: 14px;
                        font-weight: 500;
                        line-height: 20px;
                        letter-spacing: -0.05px;
                        margin-top: 16px;`;
            case 300:
            case 200:
                return `font-size: 12px;
                        font-weight: 500;
                        line-height: 16px;
                        letter-spacing: 0;
                        margin-top: 16px;`;
            case 100:
                return `font-size: 11px;
                        font-weight: 400;
                        line-height: 16px;
                        letter-spacing: 0.6px;
                        margin-top: 16px;
                        text-transform: uppercase;`;
        }
    }};
    margin-bottom: 16px;
`;

class Heading extends PureComponent {
    static propTypes = {
        semantic: PropTypes.string,
        size: PropTypes.oneOf([100, 200, 300, 400, 500, 600, 700, 800, 900])
            .isRequired,
        font: PropTypes.oneOf(['display', 'ui', 'mono']),
        color: PropTypes.string
    };

    static defaultProps = {
        size: 500,
        semantic: 'h2'
    };

    render() {
        const { semantic, ...props } = this.props;
        return <StyledComponent as={semantic} {...props} />;
    }
}

export { Heading };
