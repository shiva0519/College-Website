
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
        {/* <Navbar /> */}
        <h1 className="banner-heading">PaperHub</h1>
       <h2></h2>
        <h4>Master Your Exams with Past Papers</h4>
      </div>

      <div className="homepage-container">
        <div className="homepage-content text-center">
          <p className="homepage-info">
          PaperHub is dedicated to providing B.Tech students with easy access to previous year question papers. Our platform empowers students to familiarize themselves with exam patterns, practice effective time management, and enhance their chances of success in exams. By offering a comprehensive collection of past papers, PaperHub supports your academic journey and helps you excel in your studies."
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
