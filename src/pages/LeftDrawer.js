import React from 'react';
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Menu from './Menu';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';


class LeftDrawer extends React.Component {
  render() {
    let { navDrawerOpen, classes } = this.props;
    return (
      <Drawer variant="persistent" anchor="left" open={navDrawerOpen} classes={{ paper: classes.drawerPaper }}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <Menu />
      </Drawer>
    );
  }
};

LeftDrawer.propTypes = {
  navDrawerOpen: PropTypes.bool,
  classes: PropTypes.object.isRequired
};

export default withStyles({ withTheme: true })(LeftDrawer);
