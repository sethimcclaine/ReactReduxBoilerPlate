import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import App from './app';

const mapStateToProps = ({ userName }) => ({
    userName,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
}, dispatch);

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
