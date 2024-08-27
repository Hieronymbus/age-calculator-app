import React, { useState, useEffect } from "react";

function AgeOutput(props) {
  const { birthDate } = props;
  const { day, month, year } = birthDate;

  const [ageYears, setAgeYears] = useState("--");
  const [ageMonths, setAgeMonths] = useState("--");
  const [ageDays, setAgeDays] = useState("--");

  useEffect(() => {
    if (day && month && year) {

      const currentDate = new Date();
      const birthDate = new Date(`${month},${day},${year}`);
      
      const diffInMilliSec = currentDate - birthDate;
      
      let totalDays = diffInMilliSec/1000/60/60/24 
      let daysLeftMinusYears = Math.floor(totalDays) % 365
      
      let exactDays = daysLeftMinusYears % 31
      let exactMonths = (daysLeftMinusYears - exactDays) / 31
      let exactYears = (Math.floor(totalDays) - daysLeftMinusYears) / 365
      
      setAgeDays(exactDays);
      setAgeMonths(exactMonths);
      setAgeYears(exactYears);

    }
  }, [day, month, year]);

  return (
    <div className="age-output-container">
      <h1 className="age-output">
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
