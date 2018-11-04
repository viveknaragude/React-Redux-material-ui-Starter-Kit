import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class ConfirmDelete extends React.Component {

    constructor(props) {
        super(props);
        this.handleClose = this.handleClose.bind(this);
        this.handleYes = this.handleYes.bind(this);
        this.handleNo = this.handleNo.bind(this);
        this.state = { open: false };
    }


    handleClose(action) {
        this.props.onModalClose(action);
    }

    handleYes() {
        this.handleClose(true);

    }
    handleNo() {
        this.handleClose(false);
    }

    render() {

        const { resourceHeader, resourceSubject,openDeleteDialog} = this.props;
        return (
            <Dialog
                open={openDeleteDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={this.handleNo}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">
                    {resourceHeader}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {resourceSubject}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleNo} color="primary"> No </Button>
                    <Button onClick={this.handleYes} color="primary"> Yes </Button>
                </DialogActions>
            </Dialog>

        );
    }
}

ConfirmDelete.propTypes = {
    resourceName: PropTypes.string,
    resourceValue: PropTypes.string,
    onModalClose: PropTypes.func,
    openDeleteDialog: PropTypes.bool
};

export default ConfirmDelete;

