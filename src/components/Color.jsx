function Color(){
    let allColors=["RED","BLACK","WHITE"];
    let mappedColors=allColors.map((eachColor)=><li key={eachColor}>{eachColor}</li>);
    return (
        <>
        <h3>Color Component!</h3>
        {/* <h5>{allColors}</h5> */}
        {/* <ul>
            {
                allColors.map((eachColor)=><li>{eachColor}</li>)
            }
        </ul> */}
        <ul>
            {mappedColors}
        </ul>
        </>
    );
}

export default Color;