import React, {useState} from "react";

function LabelInput (props) {

    const { 
        daysMonthsYears, 
        error, 
        value, 
        onChange, 
        placeHolder, 
        autoFocus 
    } = props
    return (
        <label className= {`form-label ${error && "error-label"}`}>
                {daysMonthsYears}
                <input 
                    className={`form-input ${error && "error-input"}`}
                    type="text"
                    value={value}
                    onChange={onChange}
                    placeholder={placeHolder}
                    autoFocus={autoFocus}
                />
                {error && <p className="error">{error}</p>}
            </label>
    );
};
export default LabelInput;