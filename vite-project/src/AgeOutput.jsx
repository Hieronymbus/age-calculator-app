import React, { useState, useEffect } from "react";

function AgeOutput(props) {
  const { birthDate } = props;
  const { day, month, year } = birthDate;

  const [ageYears, setAgeYears] = useState("--");
  const [ageMonths, setAgeMonths] = useState("--");
  const [ageDays, setAgeDays] = useState("--");

  useEffect(() => {
    if (day && month && year) {
      
    }
  }, [day, month, year]);

  return (
    <div className="age-output-container">
      <h1 className="age-output-text">
        <span className="age-output-number">{ageYears}</span> years
      </h1>
      <h1 className="age-output">
        <span className="age-output-number">{ageMonths}</span> months
      </h1>
      <h1 className="age-output">
        <span className="age-output-number">{ageDays}</span> days
      </h1>
    </div>
  );
};

export default AgeOutput;
