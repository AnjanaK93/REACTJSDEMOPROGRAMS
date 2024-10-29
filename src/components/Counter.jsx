import { useState } from "react";

export default function Counter(){
    let [count,setCount]=useState(0);
    let [movieName, setMovieName] = useState("Avengers:End Game");
    // let count=0;
    function handleIncrement(){
        //count++;
        //setCount(count+1);
        // Without using 
        // setCount(count+1);
        // setCount(count+1);
        // setCount(count+1);
        // we can use setCount((count)=> count+1); 3 times to increment it 3 times automatically.Since the above is a stale.
        setCount((count)=> count+1);
        setCount((count)=> count+1);
        setCount((count)=> count+1);
        console.log(count);
    }
    function handleDecrement(){
        //count--;
        setCount(count-1);
        console.log(count);
    }
    return (
        <>
        <div className="container m-5 p-5">
            <h2>
                <button className="btn btn-warning" onClick={handleDecrement}>--BY3</button>
                <span className="mx-5 badge bg-info">{count}</span>
                <button className="btn btn-danger" onClick={handleIncrement}>+BY3</button>
            </h2>
        </div>
        </>
    );
}