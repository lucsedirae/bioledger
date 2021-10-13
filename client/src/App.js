//* Dependencies
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//* Custom components
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Entry from './components/pages/Entry';
import Progress from './components/pages/Progress';
import Register from './components/pages/Register';

//* Import global state context
import AuthState from './context/AuthState';

export default function App() {
  return (
    <Router>
      <AuthState>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/entry' component={Entry} />
          <Route exact path='/progress' component={Progress} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </AuthState>
    </Router>
  );
}
