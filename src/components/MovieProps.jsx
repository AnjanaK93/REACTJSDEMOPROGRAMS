function MovieProps({name,language,actor}){
    return (
        <>
        {/* <p><b>Movie Name:</b>{name}</p>
        <p><b>Language:</b>{language}</p>
        <p> <b>Actor:</b>{actor}</p> */}

        <p><b>Movie Name:</b>{name}<br/>
        <b>Language:</b>{language}<br/>
        <b>Actor:</b>{actor}</p>
        </>
    );
}

export default MovieProps;