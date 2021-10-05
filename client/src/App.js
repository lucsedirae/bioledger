//* Dependencies
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//* Custom components
import Home from './components/pages/Home';
import Entry from './components/pages/Entry';
import Progress from './components/pages/Progress';
import Register from './components/pages/Register';

//* Context state imports

export default function App() {
  return (
    //* Auth provider
    //* Metrics provider

    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/entry' component={Entry} />
        <Route exact path='/progress' component={Progress} />
        <Route exact path='/register' component={Register} />
      </Switch>
    </Router>

    //* Metrics provider close
    //* Auth provider close
  );
}
