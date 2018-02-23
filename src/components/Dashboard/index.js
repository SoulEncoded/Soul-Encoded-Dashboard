import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Markdown } from '../../helper/react-shadow';
import styles from './styles.css';
import {
    getRepo,
    fetchTableOfContents,
    fetchContent,
} from '../../actions';


class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchTableOfContents();
    }

    render() {
        return (
            <div className="contents-container">
                <div className="table-of-contents">
                    <Markdown
                        markup={this.props.dashboard.get('tableOfContents')}
                        action={this.props.getContents}
                    />
                </div>
                <div className="content">
                    <Markdown
                        markup={this.props.dashboard.get('content')}
                        action={() => {}}
                    />
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRepo: (repoName) => dispatch(getRepo(repoName)),
        fetchTableOfContents: () => fetchTableOfContents(dispatch),
        getContents: (repoName) => (e) => {
            e.preventDefault();
            fetchContent(dispatch, repoName)}
    }
}

const mapStateToProps = state => {
    return state;
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Dashboard);
