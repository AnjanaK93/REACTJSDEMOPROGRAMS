import React, { useState } from "react";

function MovieComponent() {
    // Initialize state with the first movie title
    const [movie, setMovie] = useState("Avengers: Endgame");

    
    const toggleMovie = () => {
        setMovie(prevMovie => (prevMovie === "Avengers: Endgame" ? " " : "Avengers: Endgame"));
    };

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h1>Current Movie:</h1>
            <p style={{ fontSize: "24px" }}>{movie}</p>
            <button onClick={toggleMovie} className="btn btn-warning">
                Change Movie
            </button>
        </div>
    );
}

export default MovieComponent;
