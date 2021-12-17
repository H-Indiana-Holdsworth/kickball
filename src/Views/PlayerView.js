import React from 'react';
import { useEffect, useState } from 'react';
import { fetchPlayers } from '../services/players';

export default function PlayerView() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchPlayers();
      setPlayers(resp);
    };
    fetchData();
  }, []);

  return (
    <div>
      <PlayerView players={players} />
    </div>
  );
}
