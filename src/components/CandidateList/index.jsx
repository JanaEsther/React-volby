import React from 'react';
import { Candidate } from '../Candidate/index';

 export const CandidateList = ({ candidates, onVote }) => {
  return (
    <div className="candidate-list">
      {candidates.map((c) => (
        <Candidate
          key={c.name}
          name={c.name}
          avatar={c.avatar}
          onVote={onVote}
        />
      ))}
    </div>
  );
};
