import React from 'react';
import { useEffect, useState } from 'react';
// import { fetchTeamsById } from '../services/teams';
import { getTeamById } from '../services/teams';
import TeamDetail from '../Components/TeamDetail';

export default function TeamInd(props) {
  const [teamInd, setTeamInd] = useState([]);
  const id = props.match.params.id;

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getTeamById(id);
      setTeamInd(resp);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <TeamDetail teamInd={teamInd} />
    </div>
  );
}
