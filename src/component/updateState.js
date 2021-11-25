import React, { useState, useEffect } from "react";

const updateState = (props) => {
    const [count, setCount] = useState(0);
    const [data, setData] = useState([{ item: 'A'}, { item: 'B'}]);

    useEffect(() => {
        // Update the document title using the browser API
        console.log('count :', count);
        document.title = `You clicked ${count} times`;
    }, [count]);

    useEffect(() => {
        console.log('data :', data);
    }, [data]);

    function changeData (count) {
        // let value = data
        // value[0].item = value[0].item + count
        // let res = JSON.stringify(value)
        // setData(JSON.parse(res))

        // setData(
        //     data.map((val, index) => 
        //         index === 0 
        //         ? {...val, item : "changed"+count} 
        //         : val 
        // ))

        setData(Object.values({...data, [0]: {...data[0], item: "changed"+count }}))
    }

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
            <p>Text:  {data[0].item} </p>
            <button onClick={() => changeData(count)}>
                change
            </button>
        </div>
    )
}

export default updateState;