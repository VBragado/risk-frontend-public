import React, { useState } from 'react';

const LeaderboardTable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Sort by score');

  const leaderboardData = [
    { username: 'Alice', score: 150 },
    { username: 'Bob', score: 100 },
    { username: 'Charlie', score: 75 },
    { username: 'David', score: 25 },
    { username: 'Eve', score: 10 }
  ];

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={() => setIsOpen(!isOpen)}>
        LEADERBOARD <span>&#x25BC;</span>
      </div>
      {isOpen && (
        <div className="dropdown-options">
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map(({ username, score }) => (
                <tr key={username}>
                  <td>{username}</td>
                  <td>{score}</td>
                </tr>
              ))}
            </tbody>
          </table>
     
          <div className="dropdown-option" onClick={() => handleOptionClick('Sort by score')}>
          </div>
        </div>
      )}
    </div>
  );
};

export default LeaderboardTable;
