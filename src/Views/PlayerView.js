import React from 'react';
import { useEffect, useState } from 'react';
import PlayerList from '../Components/PlayerList';
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
      <PlayerList players={players} />
    </div>
  );
}
