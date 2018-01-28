import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    getRepo
} from '../../actions';

class Dashboard extends Component {
    render() {
        return (
            <div onClick={() => {this.props.getRepo('test')}}>
                Test
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return { getRepo: (repoName) => dispatch(getRepo(repoName)) }
}

const mapStateToProps = state => {
    return state;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);