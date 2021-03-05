import React, { Component } from 'react';
import ErrorIndicator from '../error-indicator/error-indicator';
import Spinner from '../spinner/spinner';

const withData = (View) => {

    return class extends Component {

        state = {
            data: null,
            error: false
        };

        componentDidMount() {

            this.props.getData()
                .then((data) => {
                    this.setState({
                        data
                    });
                })
                .catch(() => {
                    this.setState({ error: true })
                })
        };

        render() {

            const { data, error } = this.state;

            if (!data) {
                return <Spinner />;
            };

            if (error) {
                return <ErrorIndicator />
            }

            return <View {...this.props} data={data} />
         };
    };
};

export default withData;