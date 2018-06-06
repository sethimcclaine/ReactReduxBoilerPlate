import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Sample from './sample';
import { messageHipChat } from 'src/actions/app-action-creators';


const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({
    messageHipChat,
}, dispatch);

const SampleContainer = connect(mapStateToProps, mapDispatchToProps)(Sample);

export default SampleContainer;
