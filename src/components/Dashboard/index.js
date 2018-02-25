import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Markdown } from '../../helper/react-shadow';
import styles from './styles.css';
import {
    getRepo,
    fetchTableOfContents,
    fetchContent,
} from '../../actions';

import Header from '../Header';
import Sidebar from '../Sidebar';

class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchTableOfContents();
        this.props.getContents('Javascript-Introduction-And-Programming')({preventDefault: () =>{}});
    }

    render() {
        return (
            <div>
                <div className="contents-container">
                    <Header />
                    <div className="main-content">
                        <Sidebar 
                            markup={this.props.dashboard.get('tableOfContents')}
                            action={this.props.getContents}
                            contentContex={this.props.dashboard.get('contentContex')}
                        />
                        <div className="content">
                            <Markdown
                                markup={this.props.dashboard.get('content')}
                                action={() => {}}
                                contentContex={this.props.dashboard.get('contentContex')}
                            />
                        </div>
                    </div>
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
