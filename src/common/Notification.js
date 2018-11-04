import React from 'react';
import PropTypes from 'prop-types';
import { red, green } from '@material-ui/core/colors';
import Snackbar from '@material-ui/core/Snackbar';

class Notification extends React.Component {

    render() {
        const { notify, message, error, closed } = this.props;
        return (
            <Snackbar
                open={notify}
                message={message}
                bodyStyle={{ backgroundColor: error ? red : green }}
                autoHideDuration={7000}
                onRequestClose={closed}
            />
        );
    }
}

Notification.propTypes = {
    notify: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    error: PropTypes.bool,
    closed: PropTypes.func.isRequired
};

export default Notification;