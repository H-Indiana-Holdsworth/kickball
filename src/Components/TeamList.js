import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamList({ teams }) {
  return (
    <div>
      {teams.map((item) => (
        <Link key={item.id} to={`/teams/${item.id}`}>
          {item.name}
        </Link>
      ))}
    </div>
  );
}
