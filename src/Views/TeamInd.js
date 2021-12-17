import React from 'react';
import { useEffect, useState } from 'react';
import { getTeamById } from '../services/teams';
import TeamDetail from '../Components/TeamDetail';

export default function TeamInd(props) {
  const [teamInd, setTeamInd] = useState([]);
  const [loading, setLoading] = useState(true);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getTeamById(id);
      setTeamInd(resp);
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <p>{teamInd.name}</p>
      <p>{teamInd.city}</p>
      <p>{teamInd.state}</p>
      <TeamDetail teamInd={teamInd} />
    </div>
  );
}
