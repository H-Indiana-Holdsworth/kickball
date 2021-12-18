import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamDetail({ teamInd }) {
  return (
    <div className="team-ind">
      {teamInd.players.map((item) => (
        <Link key={item.id} to={`/players/${item.id}`}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
