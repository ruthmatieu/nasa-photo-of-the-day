import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateContainer(props) {
    const [date, setDate] = useState({startDate: new Date()});
    function helperFunction(date) {
        setDate({startDate: date})
        console.log(props.changedDate)
    }
   
    return (
        <div>
            <DatePicker 
                selected={date.startDate} 
                dateFormat = "yyyy-MM-dd"
                onChange={helperFunction}
                />
        </div>
    )
}


export default DateContainer;