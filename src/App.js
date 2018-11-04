import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import withWidth from '@material-ui/core/withWidth';
import cyan from '@material-ui/core/colors/cyan';
import green from '@material-ui/core/colors/green';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './pages/Header';
import LeftDrawer from './pages/LeftDrawer'
//import Footer from './pages/Footer';
// A theme with custom primary and secondary color.
// It's optional.


const theme = createMuiTheme({
  palette: {
    primary: {
      light: cyan[300],
      main: cyan[500],
      dark: cyan[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { navDrawerOpen: false };
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.width !== nextProps.width) {
      this.setState({ navDrawerOpen: nextProps.width === 'xl' ||  nextProps.width === 'lg' });
    }
  }

  handleChangeRequestNavDrawer() {
    this.setState({
      navDrawerOpen: !this.state.navDrawerOpen
    });
  }

  render() {
    let { navDrawerOpen } = this.state;
    const paddingLeftDrawerOpen = 180;

    const styles = {
      header: {
        paddingLeft: navDrawerOpen ? paddingLeftDrawerOpen : 0
      },
      container: {
        margin: '80px 20px 20px 15px',
        paddingLeft: navDrawerOpen && this.props.width !== 'sm' ? paddingLeftDrawerOpen : 0
      }
    };
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <div>
          <Header menuStyle={styles.header} handleChangeRequestNavDrawer={this.handleChangeRequestNavDrawer.bind(this)} />

          <LeftDrawer navDrawerOpen={navDrawerOpen} />

          <div style={styles.container}>
            {this.props.children}
          </div>
        </div>

      </MuiThemeProvider>
    );
  }
}

export default withWidth()(App);
