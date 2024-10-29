function Person(){
    let onePerson={
        personId:101,
        personFirstName:"Emma",
        personLastName:"Watson"
    };
    return (
        <>
        <h3>Person Component</h3>
        <h4>Person ID:{onePerson.personId}</h4>
        <h4>Person First Name:{onePerson.personFirstName}</h4>
        <h4>Person Last Name:{onePerson.personLastName}</h4>
        </>
    );
}

export default Person;