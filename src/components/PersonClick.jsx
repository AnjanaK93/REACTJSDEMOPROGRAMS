
import { useState} from "react";
function PersonClick(){
    let personDetails=[
        {
            personName:"Alice",
            personAge:30,
            personImage:"https://images.unsplash.com/photo-1705169756971-c2f3b72a6b96?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ];

    const [showDetails, setShowDetails] = useState(false);

    function displayPerson(){
        setShowDetails(prev => !prev);

    }
    return (
        <>
        <div>
            <button className="btn btn-danger" onClick={displayPerson}>Click Me..</button>
            {showDetails && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <img src={personDetails[0].personImage} alt={personDetails[0].personName} style={{ width: '200px', borderRadius: '10px' }} />
                    <h2>{personDetails[0].personName}</h2>
                    <p>Age: {personDetails[0].personAge}</p>
                    
                </div>
            )}
        </div>
        </>
    );
}

export default PersonClick;