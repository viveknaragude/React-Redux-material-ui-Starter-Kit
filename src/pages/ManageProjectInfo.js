import React from 'react';
import PropTypes from 'prop-types';
import ProjectInfo from './ProjectInfo';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { bindActionCreators } from 'redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Notification from '../common/Notification';


export class ManageProjectInfo extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.saveProjectInfo = this.saveProjectInfo.bind(this);
        this.redirectToProjectInfoList = this.redirectToProjectInfoList.bind(this);
        this.state = { notify: false, message: '', error: false };
    }

    componentDidMount() {
        // dispatch and reset projectInfo page
    }

    saveProjectInfo(values) {
        /*  Create and call saveProjectInfo action */
        this.showNotification("Save!! Create and call saveProjectInfo action");
    }

    redirectToProjectInfoList() {
        this.props.history.push(`/ProjectInfiList`);
    }

    showNotification = (msg, err) => {
        if (err)
            this.setState({ notify: true, message: msg, error: true });
        else
            this.setState({ notify: true, message: msg, error: false });
    };

    handleNotificationClosed = () => {
        this.setState({
            notify: false
        });
    };

    render() {
        const { notify, message, error } = this.state;
        return (
            <div>
                <Card>
                    <CardContent>
                        <h1>Project Information</h1>
                    </CardContent>
                    <ProjectInfo
                        onSubmit={this.saveProjectInfo}
                        onCancel={this.redirectToProjectInfoList}
                    />
                </Card>

                <Notification
                    notify={notify}
                    message={message}
                    error={error}
                    closed={this.handleNotificationClosed}
                />
            </div>
        );
    }
}


ManageProjectInfo.propTypes = {
    actions: PropTypes.object.isRequired,
    dispatch: PropTypes.func
};

ManageProjectInfo.contextTypes = {
    router: PropTypes.object
};

export default ManageProjectInfo;
