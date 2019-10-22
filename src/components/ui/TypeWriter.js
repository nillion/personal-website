import PropTypes from 'prop-types';
import React, { Component } from 'react';

class TypeWriter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            displayedText: ''
        };
    }

    componentDidMount() {
        this.type();
    }

    componentWillUnmount() {
        this._timeout && clearTimeout(this._timeout);
    }

    type() {
        const { speed, text } = this.props;
        let { index } = this.state;
        if (index < text.length) {
            const displayedText = `${this.state.displayedText}${text.charAt(index)}`;
            index++;

            this.setState({ displayedText, index }, () => {
                this._timeout = setTimeout(() => {
                    this.type();
                }, speed);
            });
        }

    }

    render() {
        const { displayedText } = this.state;
        return (
            <span>{displayedText}</span>
        );
    }
}

export default TypeWriter;

TypeWriter.propTypes = {
    speed: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired
};
