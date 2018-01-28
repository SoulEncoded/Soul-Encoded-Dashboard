import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Markdown } from 'react-showdown';
import {
    getRepo,
    fetchTableOfContents,
} from '../../actions';
var base64 = require('base-64');
class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchTableOfContents();
    }

    render() {
        var markdown = '# Hello\n\nMore content...';
        return (
            <div>
                <Markdown markup={this.props.dashboard.get('tableOfContents')} />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return { 
        getRepo: (repoName) => dispatch(getRepo(repoName)),
        fetchTableOfContents: () => fetchTableOfContents(dispatch)
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);