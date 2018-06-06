import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Profile from './profile';
import {
    updateUserInfo,
} from 'src/actions/app-action-creators';

const mapStateToProps = (appReducer) => ({
    appReducer,
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateUserInfo,
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
