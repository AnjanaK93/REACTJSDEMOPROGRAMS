import { useState } from "react";

function ToggleMovie(){
    let [movie,setMovie]=useState("Avesham");
   
    function displayMovie(){
        setMovie();
        console.log(movie);
}

    return (
        <>
            <div>
                <button className="btn btn-warning" onClick={displayMovie}>Toggle Movie</button>
                
            </div>
        </>
    );
}

export default ToggleMovie;