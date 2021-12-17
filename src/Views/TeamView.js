import React from 'react';
import { useEffect, useState } from 'react';
import { fetchTeams } from '../services/teams';

export default function TeamView() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await fetchTeams();
      setTeams(resp);
    };
    fetchData();
  }, []);
  return <div></div>;
}
