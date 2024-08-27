import React from "react";
import { useState,useRef } from "react";
import Button from "./Button";
import LabelInput from "./FormLabelAndInput";

function Form(props) {
    const { setBirthDate } = props;
//form states
    const [dayInput, setDay] = useState("");
    const [monthInput, setMonth] = useState("");
    const [yearInput, setYear] = useState("");
    const [errors, setErrors] = useState({});
//functions for regex check validation
    const validateDay = (day) => /^(0|0?[1-9]|[12][0-9]|3[01])$/.test(day);
    const validateDayFeb = (day) => /^(0|0?[1-9]|[1][0-9]|2[0-8])$/.test(day);
    const validateDayThirty = (day) => /^(0|0?[1-9]|[12][0-9]|3[0])$/.test(day);
    const validateMonth = (month) => /^(0|0?[1-9]|1[0-2])$/.test(month);
    const validateYear = (year) => /^(19\d{2}|20[01]\d|202[0-4])$/.test(year);
//update day input value with validation check
    const updateDay = (e) => {
        const inputDay = e.target.value;
        if (/^\d{0,2}$/.test(inputDay)) {
            setDay(inputDay);
            if(errors.dayError === "Must be a valid date") {
                setErrors({})
            }
            setErrors(prev => ({ ...prev, dayError: "" }));
        };
    };
//update month input value with validation check
    const updateMonth = (e) => {
        const inputMonth = e.target.value;
        if (/^\d{0,2}$/.test(inputMonth)) {
            setMonth(inputMonth);
            if(errors.dayError === "Must be a valid date") {
                setErrors({})
            }
            setErrors(prev => ({ ...prev, monthError: "" }));
        };
    };
//update year input value with validation check
    const updateYear = (e) => {
        const inputYear = e.target.value;
        if (/^\d{0,4}$/.test(inputYear)) {
            setYear(inputYear);
            if(errors.dayError === "Must be a valid date") {
                setErrors({})
            }
            setErrors(prev => ({ ...prev, yearError: "" }));
        }
    };
// To change the button background during enter press form submission
    const buttonReff = useRef(null) 
    const buttonActive = () => {
    
        buttonReff.current.classList.add("form-button-active")
        setTimeout(() => buttonReff.current.classList.remove("form-button-active"), 220)
 
    }
//onSubmit function for form
    const submitBirthDate = (e) => {
        e.preventDefault();
        let newErrors = {};

        buttonActive()

        if(dayInput === ""){
            newErrors.dayError = "This field Is Required"
        } else if(monthInput == 2) {
            if (!validateDayFeb(dayInput)) {
                newErrors.dayError = 'Must be a valid day';
            };
        } else if (monthInput == 4 || monthInput == 6 || monthInput == 9 || monthInput == 11) {
            if (!validateDayThirty(dayInput)) {
                newErrors.dayError = 'Must be a valid day';
            }
        } else {
            if (!validateDay(dayInput)) {
                newErrors.dayError = 'Must be a valid day';
            };
        }
        
        if(monthInput === ""){
            newErrors.monthError = "This field Is Required"
        }else if (!validateMonth(monthInput)) {
            newErrors.monthError = 'Must be a valid month';
        };
        
        if(yearInput === ""){
            newErrors.yearError = "This field Is Required"
        }else if (!validateYear(yearInput)) {
            newErrors.yearError = 'Must be in the past and after 1900';
        };
        
        if(
            Object.keys(newErrors).length === 3 
            && dayInput != "" 
            && monthInput != "" 
            && yearInput != "" 
        ){
            newErrors = {}
            newErrors.dayError = "Must be a valid date"
            newErrors.monthError = " "
            newErrors.yearError = " "
        }

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
            <LabelInput 
                daysMonthsYears="DAY" 
                error={errors.dayError}
                value={dayInput}
                onChange={updateDay}
                placeHolder="DD"
                autoFocus = {true}
            />
            <LabelInput 
                daysMonthsYears="MONTH" 
                error={errors.monthError}
                value={monthInput}
                onChange={updateMonth}
                placeHolder="MM"
            />
            <LabelInput 
                daysMonthsYears="YEAR" 
                error={errors.yearError}
                value={yearInput}
                onChange={updateYear}
                placeHolder="YYYY"
            />
            <Button buttonReff={buttonReff}/> 
        </form>
    );
};

export default Form;


