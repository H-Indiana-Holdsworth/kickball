import React from 'react';
import { Link } from 'react-router-dom';
import './Player.css';

export default function PlayerList({ players }) {
  return (
    <div className="player-list">
      {players.map((item) => (
        <Link key={item.id} to={`/players/${item.id}`}>
          <p>{item.name}</p>
        </Link>
      ))}
    </div>
  );
}
