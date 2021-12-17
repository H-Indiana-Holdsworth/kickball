import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink } from 'react-router-dom';
import TeamView from './Views/TeamView';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavLink to="/teams">Teams</NavLink>

        <Switch>
          <Route exact path="/teams" component={TeamView} />

          {/* <Route exact path="/teams/:id" component={TeamInd} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
