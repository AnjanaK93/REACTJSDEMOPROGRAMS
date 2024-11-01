import { useNavigate } from "react-router-dom";

function CohortAdd(){
    let navigate=useNavigate();
    return (
        <>
        <div className="container col-5" >
            <button onClick={()=>navigate("/training/cohort-list")} className="btn btn-success"><i className="bi bi-backspace fs-5"></i>BACK </button>
            <div className="card square-card">
                <form>
                    <div className="card-header bg-secondary text-light">
                        <h3>ADD A COHORT</h3>
                    </div>    
                    <div className="card-body ">
                            <label htmlFor="cId">COHORT ID:</label>
                            <input type="text" placeholder="Enter the cohort id" id="cID" className="form-control" required/>
                            <label htmlFor="cName">COHORT  NAME:</label>
                                <select id="cName" className="form-control">
                                    <option value="">Select Cohort Stack Name</option>
                                    <option value="java">JAVA FULL STACK</option>
                                    <option value="python">PYHTON FULL STACK</option>
                                    <option value=".net">.NET FULL STACK</option>
                                </select>
                            <label htmlFor="cVID">COHORT VENUE ID:</label>
                            <input type="text" placeholder="Enter the cohort venue id" id="cVID" className="form-control"/>
                            <label htmlFor="cDate">COHORT START DATE:</label>
                            <input type="date" placeholder="Enter the cohort start date" id="cDate" className="form-control"/>
                            <label htmlFor="cDuration">COHORT Duration:</label>
                            <input type="text" placeholder="Enter the cohort duration in weeks" id="cDuration" className="form-control"/>
                            <label for="cSPOC">COHORT SPOC:</label>
                            <input type="text" placeholder="Enter the cohort SPOC" id="cSPOC" className="form-control"/>
                            <label for="cInstructor">COHORT INSTRUCTOR:</label>
                            <input type="text" placeholder="Enter the cohort instructor" id="cInstructor" className="form-control"/>   
                    </div>
                    <div className="footer bg-secondary text-light">
                        <button type="submit" className="btn btn-light text-dark mx-4" >
                            ADD
                        </button>
                        <button type="reset" className="btn btn-light text-dark mx-4">
                            CLEAR
                        </button>
                    </div>
                     </form>
                </div>
            </div>    
        </>
    );
}

export default CohortAdd;