import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Home from './home';
//import { placeHolder } from 'src/actions/app-action-creators';

const mapStateToProps = ({firstName, lastName}) => {
    return {
        firstName,
        lastName,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        //placeHolder
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
