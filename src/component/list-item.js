import React from "react";

const ListItem = (props) => {
    const { Name, Price, Weight, isChecked } = props;

    function toggleTask () {
        props.toggleItem(props.id);
    }
    
    return (
        <tr className={`item-${isChecked ? `Checked` : `not-Checked`}`}>
            <td>{Name}</td>
            <td>{Price}</td>
            <td>{Weight}</td>
            <td><input type="checkbox" value={Name} onChange={toggleTask} checked={isChecked} /></td>
            {/* <td>{(isChecked ?  <input type="checkbox" value={Name} onClick={toggleTask} unchecked="true" /> :
                <input type="checkbox" value={Name} onClick={toggleTask} unchecked="false" /> )}</td> */}
        </tr>
    )
}

export default ListItem;