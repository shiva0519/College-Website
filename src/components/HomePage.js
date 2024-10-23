
import React, { useState } from 'react';
import Navbar from './Navbar';
import SubjectSelection from './SubjectSelection';
import './HomePage.css';

const HomePage = () => {
  const [showSubjectSelection, setShowSubjectSelection] = useState(false);

  const handleGetQuestionPapers = () => {
    setShowSubjectSelection(true);
  };

  return (
    <div>
     
      <div className="top-banner">
        <Navbar />
        <h1 className="banner-heading">PaperHub College of Engineering</h1>
      </div>

     
      <div className="homepage-container">
        <div className="homepage-content text-center">
          <p className="homepage-info">
            PaperHub College of Engineering is renowned for its commitment to quality education, innovative teaching practices, and a focus on students' holistic development. Access to previous question papers is a vital tool for students to familiarize themselves with the exam pattern, practice time management, and improve their chances of success in exams.
          </p>
          <p className="homepage-importance">
            By reviewing past question papers, students can focus on the most relevant topics, understand the recurring questions, and strategically plan their study approach.
          </p>
          <button className="homepage-btn" onClick={handleGetQuestionPapers}>
            Get Question Papers
          </button>

          {showSubjectSelection && <SubjectSelection />} 
        </div>
      </div>
    </div>
  );
};

export default HomePage;
