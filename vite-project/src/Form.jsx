import React from "react";
import { useState } from "react";
import Button from "./Button";

function Form(props) {
    const { setBirthDate } = props;

    const [dayInput, setDay] = useState("");
    const [monthInput, setMonth] = useState("");
    const [yearInput, setYear] = useState("");
    const [errors, setErrors] = useState({});

    const validateDay = (day) => /^(0?[1-9]|[12][0-9]|3[01])$/.test(day);
    const validateMonth = (month) => /^(0?[1-9]|1[0-2])$/.test(month);
    const validateYear = (year) => /^(19\d{2}|20[01]\d|202[0-4])$/.test(year);

    const updateDay = (e) => {
        const inputDay = e.target.value;
        if (inputDay === "" || validateDay(inputDay)) {
            setDay(inputDay);
            setErrors(prev => ({ ...prev, dayError: "" }));
        }
    };

    const updateMonth = (e) => {
        const inputMonth = e.target.value;
        if (inputMonth === "" || validateMonth(inputMonth)) {
            setMonth(inputMonth);
            setErrors(prev => ({ ...prev, monthError: "" }));
        }
    };

    const updateYear = (e) => {
        const inputYear = e.target.value;
        if (/^\d{0,4}$/.test(inputYear)) {
            setYear(inputYear);
            setErrors(prev => ({ ...prev, yearError: "" }));
        }
    };

    const submitBirthDate = (e) => {
        e.preventDefault();
        const newErrors = {};


        if(dayInput === ""){
            newErrors.dayError = "This Field Is Required"
        } else if (!validateDay(dayInput)) {
            newErrors.dayError = 'Enter a valid day between 1 and 31.';
        };
        
        if(monthInput === ""){
            newErrors.monthError = "This Field Is Required"
        }else if (!validateMonth(monthInput)) {
            newErrors.monthError = 'Enter a valid month between 1 and 12.';
        };
        
        if(yearInput ===""){
            newErrors.yearError = "This Field Is Required"
        }else if (!validateYear(yearInput)) {
            newErrors.yearError = 'Enter a valid year before 2024.';
        };
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setBirthDate({ day: dayInput, month: monthInput, year: yearInput });
            setDay("");
            setMonth("");
            setYear("");
            setErrors({});
        };
    };

    return (
        <form className="birth-date-form" onSubmit={submitBirthDate}>
            <label className= {`form-label ${errors.dayError && "error-label"}`}>
                DAY
                <input 
                    className={`form-input ${errors.dayError && "error-input"}`}
                    type="text"
                    value={dayInput}
                    onChange={updateDay}
                    placeholder="DD"
                />
                {errors.dayError && <p className="error">{errors.dayError}</p>}
            </label>
            <label className={`form-label ${errors.monthError && "error-label"}`}>
                MONTH
                <input
                    className={`form-input ${errors.monthError && "error-input"}`}
                    type="text"
                    value={monthInput}
                    onChange={updateMonth}
                    placeholder="MM"
                />
                {errors.monthError && <p className="error">{errors.monthError}</p>}
            </label>
            <label className={`form-label ${errors.yearError && "error-label"}`}>
                YEAR
                <input
                    className={`form-input ${errors.yearError && "error-input"}`}
                    type="text"
                    value={yearInput}
                    onChange={updateYear}
                    placeholder="YYYY"
                />
                {errors.yearError && <p className="error">{errors.yearError}</p>}
            </label>
            <Button /> 
        </form>
    );
};

export default Form;


