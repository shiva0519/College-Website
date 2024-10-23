import React, { useState } from 'react';
import YearSelection from './YearSelection';
import papersData from '../data/papers.json'; 

const SubjectSelection = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [showYearSelection, setShowYearSelection] = useState(false);

  
  const subjects = Object.keys(papersData);

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    setShowYearSelection(true); 
  };

  return (
    <div>
      <label>Select Subject: </label>
      <select value={selectedSubject} onChange={handleSubjectChange}>
        <option value="">--Select Subject--</option>
        {subjects.map((subject) => (
          <option key={subject} value={subject}>
            {subject}
          </option>
        ))}
      </select>

      {showYearSelection && (
        <YearSelection selectedSubject={selectedSubject} /> 
      )}
    </div>
  );
};

export default SubjectSelection;
