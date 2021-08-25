import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import List from './pages/List';
import AddPerson from './pages/AddPerson';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/list" exact component={List} />
      <Route path="/add" exact component={AddPerson} />
    </Switch>
  );
}
