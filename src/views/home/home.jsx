import React from 'react';
import PropTypes from 'prop-types';

class Home extends React.Component {
    /*
    constructor(props) {
        super(props);
    }
    */

    render() {
        const { firstName, lastName } = this.props;
        return (
            <div className="home">
                <h2> Welcome { firstName } { lastName } </h2>
            </div>
        );
    }
}

Home.propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
};

export default Home;
