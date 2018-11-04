import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import { withStyles } from '@material-ui/core/styles';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { NavLink } from 'react-router-dom';

const styles = theme => ({
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main
    },
    primary: {
      color: theme.palette.common.white
    }, icon: {
      color: theme.palette.common.white
    },
  }
});
class Menu extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Paper>
        <MenuList>
          <NavLink to="/ProjectInfiList" style={{ textDecoration: 'none' }}>
            <MenuItem className={classes.menuItem} >
              <ListItemIcon className={classes.icon}>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText classes={{ primary: classes.primary }} inset primary="Project Info" />
            </MenuItem>
          </NavLink>
          </MenuList>
          </Paper>
    );
  }
}


export default withStyles(styles)(Menu);

