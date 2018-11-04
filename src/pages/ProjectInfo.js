import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { Field, reduxForm } from 'redux-form'
import { TextField} from 'redux-form-material-ui';
import { connect } from 'react-redux';


const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250,
  },
  button: {
    margin: theme.spacing.unit,
  },
});


class ProjectInfo extends React.Component {
  render() {
    const { classes } = this.props;
    const { handleSubmit, submitting, onCancel } = this.props
    return (
      <form onSubmit={handleSubmit} >
        <div className={classes.container}>
          <div>
            <Field name="ProjectName" component={TextField} className={classes.textField} margin="normal" label="Project Name" />
          </div>
          <div>
            <Field name="Subject" component={TextField} className={classes.textField} margin="normal" label="Rera No" />
          </div>
          <div>
            <Field name="Type" component={TextField} className={classes.textField} margin="normal" label="Bank Name" />
          </div>
          <div>
            <Field name="Date" component={TextField} type="datetime-local" InputLabelProps={{ shrink: true }} label="Date of Report" title="Date of Report" className={classes.textField} margin="normal" />
          </div>
        </div>
         <div>
          <Button variant="raised" type="submit" color="primary" className={classes.button} disabled={submitting}>
            Save
      </Button>
          <Button variant="contained" color="secondary" className={classes.button} onClick={onCancel}>
            Cancel
      </Button>
        </div>
      </form>
    );
  }
}

ProjectInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

ProjectInfo = reduxForm({
  form: 'projectInfo',
  enableReinitialize: true
})(ProjectInfo)


export default withStyles(styles)(ProjectInfo);