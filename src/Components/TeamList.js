import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css';

export default function TeamList({ teams }) {
  return (
    <div className="team-list">
      {teams.map((item) => (
        <Link key={item.id} to={`/teams/${item.id}`}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
