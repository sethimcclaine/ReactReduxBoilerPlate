import './profile.css';

import React from 'react';
import PropTypes from 'prop-types';
import {
    Button,
    FormControl,
    PageHeader,
    Well,
} from 'react-bootstrap';
import {
    pick,
    bind,
} from 'ramda';


class Profile extends React.Component {
    constructor(props) {
        super(props);

        this.state = pick(['firstName', 'lastName', 'userName',], props.appReducer);

        this.updateUserClick = bind(this.updateUserClick, this);
        this.handleInputChange = bind(this.handleInputChange, this);
    }
    /**
     * updates state onChange of input
     * @param {object} event
     */
    handleInputChange({ target }) {
        this.setState({ [target.dataset.field]: target.value });
    }

    updateUserClick() {
        this.props.updateUserInfo(this.state);
    }


    render() {
        const {
            firstName,
            lastName,
            userName,
        } = this.state;

        return (
            <div className="profile">
                <PageHeader>
                    <div> Profile </div>
                    <div> <small>Update your info here!</small> </div>
                </PageHeader>
                <Well>
                    <div>
                        UserName:
                        <FormControl
                            type="text"
                            value={ userName }
                            placeholder="User Name"
                            onChange={ this.handleInputChange }
                            data-field="userName"
                        />
                    </div>

                    <div>
                        FirstName:
                        <FormControl
                            type="text"
                            value={ firstName }
                            placeholder="First Name"
                            onChange={ this.handleInputChange }
                            data-field="firstName"
                        />
                    </div>

                    <div>
                        LastName:
                        <FormControl
                            type="text"
                            value={ lastName }
                            placeholder="Last Name"
                            onChange={ this.handleInputChange }
                            data-field="lastName"
                        />
                    </div>

                    <div className="btnGroup">
                        <Button bsStyle="primary" onClick={ this.updateUserClick}>Update</Button>
                    </div>
                </Well>
            </div>
        );
    }
}

Profile.propTypes = {
    appReducer: PropTypes.object,
    updateUserInfo: PropTypes.func,
};

export default Profile;
