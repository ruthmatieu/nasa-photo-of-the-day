import React from 'react';

function Dropdown(props) {
    return (
        <div>
            <form>
                <label>Select a date to display a different image</label><br/>
                <select>
                    <option>{props.date}</option>
                </select>
                <input
                    type="submit"
                />
            </form>
        </div>
    )
}

export default Dropdown;