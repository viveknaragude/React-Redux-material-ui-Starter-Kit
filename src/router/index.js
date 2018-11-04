import React from 'react';
import ManageProjectInfo from '../pages/ManageProjectInfo';
import ProjectInfiList from '../pages/ProjectInfiList';
import EditProjectInfo from '../pages/EditProjectInfo'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';


class Index extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route exact path="/" component={ProjectInfiList} />
            <Route exact path="/ProjectInfiList" component={ProjectInfiList} />
            <Route exact path="/ProjectInfo" component={ManageProjectInfo} />
            <Route exact path="/ProjectInfo/:id" component={EditProjectInfo} />
          </Switch>
        </App>
      </Router>
    );
  }
}
export default Index;