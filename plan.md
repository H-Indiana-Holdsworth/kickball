# Epic Kickball lab plan

## App.js

- [x] `<Route exact path=/teams component={TeamView} />`
- [x] `<Route exact path=/teams/:id component={TeamInd} />`
- [ ] `<Route exact path=/players component={PlayerView} /> `
- [ ] `<Route exact path=/players/:id component={PlayerDetail} />`

## Views - has state

### TeamView - A page that lists all the teams in the league

- [x] use useEffect to fetchTeams the list of teams
- [x] use useState to define the teams variable
- [x] `returns(<TeamList />)`

### TeamInd - A page that shows the details for a single team, such as their name and logo and players

- [x] use useEffect to fetchTeamById
- [x] use useState to define teamInd variable
- [x] `return(<TeamDetail />)`

### PlayerView - A page that lists all the players in the leage

- [ ] use useEffect to fetch the list of players
- [ ] use useState to define the players variable
- [ ] `return(<PlayerList />)`

### PlayerInd - A page that renders details about a single player

- [ ] use useEffect to fetchPlayerById
- [ ] use useState to define individual player variable
- [ ] `return(<PlayerDetail />)`

## Components - has no state

### TeamList - Renders all the teams

- [x] use a .map to render links for each team

### TeamDetail - Renders team info and players in the team

- [x] .map to render links for each player in the corresponding team

### PlayerList - Renders all the players

- [ ] use a .map to render links for each player

### PlayerDetail - Renders details about each player

- [ ] uses .map to render details for a single player such as name and position

## Services

### teams.js

- [x] make api call using fetchTeams to get all teams
- [x] make api call using fetchTeamById to get a specific team

### players.js

- [x] make api call using fetchPlayers to get all players
- [x] make api call using fetchPlayerById to get a specific player
