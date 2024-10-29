import MovieProps from "./MovieProps";

function Movie() {
  const movies = [
    { name: "Lucifer", language: "Malayalam", actor: "Mohanlal" },
    { name: "Romeo & Juliet", language: "Telugu", actor: "Allu Arjun" },
    { name: "Aavesham", language: "Malayalam", actor: "Fahad Fasil" },
    { name: "Inception", language: "English", actor: "Leonardo DiCaprio" },
    { name: "Big B", language: "Malayalam", actor: "Mammootty" },
  ];

  return (
    <>
      <h3>Movie Details</h3>
      
      {movies.map((movie, index) => (
        <div key={index}>
          <h4>Movie #{index + 1}</h4>
        <MovieProps 
          key={index}
          name={movie.name} 
          language={movie.language} 
          actor={movie.actor} 
          
        />
        <p>-----------------</p>
        </div>
      ))}
    </>
  );
}

export default Movie;