import React from 'react';

export default function PlayerDetail({ playerInd }) {
  return (
    <div className="player-ind">
      <p>Name: {playerInd.name}</p>
      <p>Position: {playerInd.position}</p>
      <p>Team id: {playerInd.team_id}</p>
    </div>
  );
}
