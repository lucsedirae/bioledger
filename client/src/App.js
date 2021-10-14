//* Dependencies
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//* Custom components
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import Entry from './components/pages/Entry';
import PrivateRoute from './components/auth/PrivateRoute';
import Progress from './components/pages/Progress';
import Register from './components/pages/Register';

//* Import global state context
import AuthState from './context/AuthState';
import MetricState from './context/MetricState';

export default function App() {
  return (
    <Router>
      <AuthState>
        <MetricState>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/entry' component={Entry} />
            <PrivateRoute exact path='/progress' component={Progress} />
            <Route exact path='/register' component={Register} />
          </Switch>
        </MetricState>
      </AuthState>
    </Router>
  );
}
