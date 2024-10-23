// import React from 'react';
// import papersData from '../data/papers.json'; // JSON file for papers

// const SubjectPapers = ({ year }) => {
//   const papers = papersData[year];  // Get papers for the selected year

//   return (
//     <div>
//       <h3>Question Papers for {year}</h3>
//       <ul>
//         {Object.keys(papers).map(subject => (
//           <li key={subject}>
//             <a href={papers[subject]} target="_blank" rel="noopener noreferrer">
//               {subject}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SubjectPapers;
import React from 'react';
import papersData from '../data/papers.json'; // Load your papers.json file

const SubjectPapers = ({ subject, year }) => {
  const papers = papersData[subject]?.[year]; // Get papers for the selected subject and year

  return (
    <div>
      <h3>Question Papers for {subject} - {year}</h3>
      {papers ? (
        <ul>
          {papers.map((paper, index) => (
            <li key={index}>
              <a href={paper} target="_blank" rel="noopener noreferrer">
                {`Paper ${index + 1}`}
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <p>No papers available for this selection.</p>
      )}
    </div>
  );
};

export default SubjectPapers;
