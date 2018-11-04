import React from 'react';
import PropTypes from 'prop-types';
import ProjectInfo from './ProjectInfo';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { bindActionCreators } from 'redux';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Notification from '../common/Notification';



export class EditProjectInfo extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.updateProjectInfo = this.updateProjectInfo.bind(this);
        this.redirectToProjectInfoList = this.redirectToProjectInfoList.bind(this);
        this.state = { notify: false, message: '', error: false };
    }

    componentDidMount() {
        /*  let id =this.props.id
        Create and call getProjectInfobyid action*/
        this.showNotification("Load!! Create and call getProjectInfobyid action");

    }

    updateProjectInfo(values) {
        /*  Create and call updateProjectInfo action */
        this.showNotification("Update!! Create and call updateProjectInfo action");

    }

    redirectToProjectInfoList() {
        this.props.dispatch(reset('projectInfo'));
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
                        <h1>Edit Project Information</h1>
                    </CardContent>
                    <ProjectInfo
                        onSubmit={this.updateProjectInfo}
                        onCancel={this.redirectToProjectInfoList}
                        editMode
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

function mapStateToProps(state, ownProps) {
    const id = ownProps.match.params.id;
    return {
        id: id
    };
}




EditProjectInfo.propTypes = {
    actions: PropTypes.object.isRequired,
    dispatch: PropTypes.func
};

EditProjectInfo.contextTypes = {
    router: PropTypes.object
};

export default connect(mapStateToProps, null)(EditProjectInfo);
