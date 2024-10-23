import React, { useState } from 'react';
import YearSelection from './YearSelection';
import papersData from '../data/papers.json'; // Assuming you have the JSON data

const SubjectSelection = () => {
  const [selectedSubject, setSelectedSubject] = useState('');
  const [showYearSelection, setShowYearSelection] = useState(false);

  // Extract the subjects from the papers.json file
  const subjects = Object.keys(papersData);

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value);
    setShowYearSelection(true); // Show year selection when a subject is chosen
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
        <YearSelection selectedSubject={selectedSubject} /> // Pass the selected subject to YearSelection
      )}
    </div>
  );
};

export default SubjectSelection;
