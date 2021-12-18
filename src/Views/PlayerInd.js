import React from 'react';
import { useEffect, useState } from 'react';
import { getPlayerById } from '../services/players';
import PlayerDetail from '../Components/PlayerDetail';

export default function PlayerInd(props) {
  const [playerInd, setPlayerInd] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getPlayerById(id);
      setPlayerInd(resp);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <PlayerDetail playerInd={playerInd} />
    </div>
  );
}
