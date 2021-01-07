//import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {NavBar} from './NavBar.js'
import {
  HomePage,
  CounterButtonPage,
  PeopleListPage,
  NotFoundPage,
  ProtectedPage,
  ControlledFormPage,
  UncontrolledFormPage,
  UserProfilePage
} from './pages';




function App() {
  
  return (
    <div className="App">
      
      <Router>
        <NavBar/>
        <div className="App-header">
          <Switch>
            <Route path="/" exact>
              <HomePage/>
            </Route>
            <Route path="/counter/:name">
              <CounterButtonPage/>
            </Route>
            <Route path="/peoplelist">
              <PeopleListPage/>
            </Route>
            <Route path="/protected">
              <ProtectedPage/>
            </Route>
            <Route path="/controlled">
              <ControlledFormPage/>
            </Route>
            <Route path="/uncontrolled">
              <UncontrolledFormPage/>
            </Route>
            <Route path="/user">
              <UserProfilePage/>
            </Route>
            <Route>
              <NotFoundPage/>
            </Route>
          </Switch>
        </div>
      </Router>
      
    </div>
  );
}

export default App;
