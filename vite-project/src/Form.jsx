import React from "react";
import { useState } from "react";


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

        if (!validateDay(dayInput)) {
            newErrors.dayError = 'Enter a valid day between 1 and 31.';
        }

        if (!validateMonth(monthInput)) {
            newErrors.monthError = 'Enter a valid month between 1 and 12.';
        }

        if (!validateYear(yearInput)) {
            newErrors.yearError = 'Enter a valid year before 2024.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            setBirthDate({ day: dayInput, month: monthInput, year: yearInput });
            setDay("");
            setMonth("");
            setYear("");
            setErrors({});
        }
    };

    return (
        <form className="birth-date-form" onSubmit={submitBirthDate}>
            <label>
                DAY
                <input 
                    type="text"
                    value={dayInput}
                    onChange={updateDay}
                    placeholder="Enter day"
                />
                {errors.dayError && <p className="error">{errors.dayError}</p>}
            </label>
            <label>
                MONTH
                <input
                    type="text"
                    value={monthInput}
                    onChange={updateMonth}
                    placeholder="Enter month"
                />
                {errors.monthError && <p className="error">{errors.monthError}</p>}
            </label>
            <label>
                YEAR
                <input
                    type="text"
                    value={yearInput}
                    onChange={updateYear}
                    placeholder="Enter year"
                />
                {errors.yearError && <p className="error">{errors.yearError}</p>}
            </label>
            <button className="form-button" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="46" height="44" viewBox="0 0 46 44"><g fill="none" stroke="#FFF" stroke-width="2"><path d="M1 22.019C8.333 21.686 23 25.616 23 44M23 44V0M45 22.019C37.667 21.686 23 25.616 23 44"/></g></svg></button>
        </form>
    );
}

export default Form;


