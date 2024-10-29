import { useState } from "react";

function InputDemo(){
    //let data="hello";
    let [data,setData]=useState("");
    // function handleChange(event){
    //     console.log(event.target.value);
    //     setData(event.target.value);
    // }
    return (
        <>
        <div className="container m-5 p-5">
            {/* <input type="text" value=" " onChange={(e)=>handleChange(e)}></input>->It can't be used in jsx. */}
            <input type="text" value={data} onChange={(e)=>handleChange(e)}></input>
            <input type="text" value={data} onChange={(e)=>setData(e.target.value)}></input>
            <div>{data}</div>
        </div>
        </>
    );
}

export default InputDemo;