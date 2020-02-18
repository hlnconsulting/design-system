import React, { PureComponent } from 'react'; // eslint-disable-line no-unused-vars
import { Text } from './../';

class Strong extends PureComponent {
    static propTypes = {
        ...Text.propTypes
    };

    static defaultProps = {
        ...Text.defaultProps
    };

    render() {
        return (
            <Text
                style={{ fontWeight: 500 }}
                {...this.props}
                semantic="strong"
            />
        );
    }
}

export { Strong };
