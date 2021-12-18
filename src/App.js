import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { NavLink } from 'react-router-dom';
import TeamView from './Views/TeamView';
import TeamInd from './Views/TeamInd';
import PlayerView from './Views/PlayerView';
import PlayerInd from './Views/PlayerInd';
import Home from './Views/Home';
import './Views/Home.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <p>
          <NavLink to="/home">Home</NavLink>
        </p>
        <p>
          <NavLink to="/teams">Teams</NavLink>
        </p>
        <p>
          <NavLink to="/players">Players</NavLink>
        </p>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/teams" component={TeamView} />
          <Route exact path="/teams/:id" component={TeamInd} />
          <Route exact path="/players" component={PlayerView} />
          <Route exact path="/players/:id" component={PlayerInd} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
