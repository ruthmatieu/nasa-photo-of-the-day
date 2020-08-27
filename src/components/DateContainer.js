import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function DateContainer(props) {
    const [date, setDate] = useState(null);
   
    return (
        <div>
            <DatePicker 
                selected={date} 
                onChange={date => setDate(date)}
                
                />
            {/* <form>
                <label>Select a date to display a different image</label><br/>
                <select name="calendar" id="dates">
                    <option value={DatePicker}>Choose a date<DatePicker/></option>
                </select>
            </form> */}
        </div>
    )
}



// class Dropdown extends Component {
//     state = {
//       date: new Date(),
//     }
   
//     onChange = date => this.setState({ date })
   
//     render() {
//       return (
//         <div>
//           <Calendar
//             onChange={this.onChange}
//             value={this.state.date}
//           />
//         </div>
//       );
//     }
//   }

export default DateContainer;