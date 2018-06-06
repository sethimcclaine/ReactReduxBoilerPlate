import React from 'react';
import PropTypes from 'prop-types';
import RadioGroup from 'src/components/radio-group';
import BooleanBox from 'src/components/boolean-box';

import {
    Button,
    FormControl,
    PageHeader,
    Well,
} from 'react-bootstrap';

import {
    bind,
} from 'ramda';

const colorOptions = [{
    name: 'Green',
    value:'green',
}, {
    name: 'Yellow',
    value: 'yellow',
}, {
    name: 'Red',
    value: 'red',
}];

const formatOptions = [{
    name: 'text',
    value: 'text',
}];

class Sample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            color: 'green',
            message: 'My second notification (yey)',
            notify: false,
            message_format: 'text',
        };

        this.handlePostClick = bind(this.handlePostClick, this);
        this.handleInputChange = bind(this.handleInputChange, this);
        this.updateColor = bind(this.updateColor, this);
        this.updateFormat = bind(this.updateFormat, this);
        this.updateNotify = bind(this.updateNotify, this);
    }

    /**
     * updates state onChange of input
     * @param {object} event
     */
    handleInputChange({ target }) {
        this.setState({ [target.dataset.field]: target.value });
    }

    handlePostClick() {
        this.props.messageHipChat(this.state);
    }

    updateColor({ target }) {
        this.setState({ color: target.value });
    }

    updateFormat({ target }) {
        this.setState({ message_format: target.value });
    }

    updateNotify({ target }) {
        this.setState({ notify: target.checked });
    }

    render() {
        const {
            color,
            message,
            notify,
            message_format,
        } = this.state;

        return (
            <div className="sample">
                <PageHeader>
                    Sample POST API call to HipChat <small>(Room: Seth Test)</small>
                </PageHeader>
                <Well>
                    <div>
                        Color:
                        <RadioGroup
                            field="color"
                            selected={ color }
                            options={ colorOptions }
                            onChange={ this.updateColor }
                        />
                    </div>

                    <div>
                        Message:
                        <FormControl
                            type="text"
                            value={ message }
                            placeholder="First Name"
                            onChange={ this.handleInputChange }
                            data-field="message"
                        />
                    </div>

                    <div>
                        Notify:
                        <BooleanBox
                            name="Notify"
                            checked={ notify === 'true' }
                            onChange={ this.updateNotify }
                        />
                    </div>

                    <div>
                        Message format:
                        <RadioGroup
                            field="message_format"
                            selected={ message_format }
                            options={ formatOptions }
                            onChange={ this.updateFormat }
                        />
                    </div>

                    <div className="btnGroup">
                        <Button bsStyle="primary" onClick={ this.handlePostClick}>Post</Button>
                    </div>
                </Well>
            </div>
        );
    }
}

Sample.propTypes = {
    messageHipChat: PropTypes.func,
};

export default Sample;
