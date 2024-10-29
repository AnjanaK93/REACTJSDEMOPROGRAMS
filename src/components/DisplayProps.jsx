function DisplayProps({name,greeting,emoji}){
    // let myname=props.name;
    // let {name,greeting} =props; //object destructing
    return(
        <>
        <h3>This is DisplayProps Component!</h3>
        <h4>
            {/* {props.greeting} {myname} */}
           {/* {greeting} {name}->Object destructing  */}
           {greeting} {name} {emoji}
        </h4>
        </>
    );
}

export default DisplayProps;