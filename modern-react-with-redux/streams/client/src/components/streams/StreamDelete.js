import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {

    componentDidMount() {
        this.props.fetchStream(this.props.match.params.id);
    }

    onSubmit() {
        this.props.deleteStream(this.props.match.params.id);
    }

    renderActions() {
        //or <> </>
        return (
            <Fragment>
                <button onClick={() => this.onSubmit()} className="ui button negative">Delete</button>
                <Link to="/" className="ui button">Cancel</Link>
            </Fragment>
        );
    };


    render() {
        const { stream } = this.props;
        return (
            <Modal
                title="Delete Stream"
                content={`Are you sure you want to delete the stream: ${stream ? `${stream.title}` : 'Loading...'}?`}
                actions={this.renderActions()}
                onDismiss={() => history.push('/')}
            />
        );
    }

}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);