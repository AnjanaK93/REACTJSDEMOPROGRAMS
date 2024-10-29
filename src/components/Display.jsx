import DisplayProps from "./DisplayProps";

function Display(){
    let name="Mark";
    let allColors=["Red","Blue","Black"];
    return (
    <>
        <h3>Diplay Component!!</h3>
        <p>Hello Bob!!</p>
        <p>Hello {name}!</p>
        <p>Colors:{allColors}</p>
        <DisplayProps name="Will" greeting="Hi" emoji=""></DisplayProps>
    </>
    );

}

export default Display;