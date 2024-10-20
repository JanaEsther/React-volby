import { useState, useEffect } from 'react';
import { Castle } from '../../components/Castle';
import { CandidateList } from '../../components/CandidateList/index';
import './style.css';

export const HomePage = () => {
  const [candidates, setCandidates] = useState([]);
  const [president, setPresident] = useState(null);

  const handleVote = (name) => {
    if (window.confirm(`Opravdu chcete zvolit kandidáta ${name}?`)) {
      setPresident(name);
    }
  };

  useEffect(
    () =>
      setCandidates([
        { name: 'Ferdinand Mravenec', avatar: '/avatars/candidate01.png' },
        { name: 'Markéta Smetana', avatar: '/avatars/candidate02.png' },
        { name: 'Beáta Skočdopolová', avatar: '/avatars/candidate03.png' },
        { name: 'Lubomír Poňuchálek', avatar: '/avatars/candidate04.png' },
      ]),
    [],
  );

  return (
    <div className="container">
      <Castle president={president} />
      <h2>Kandidáti</h2>
      <CandidateList candidates={candidates} onVote={handleVote} />
    </div>
  );
};
