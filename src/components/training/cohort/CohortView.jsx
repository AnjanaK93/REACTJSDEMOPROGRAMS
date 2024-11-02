import { useLocation, useNavigate, useParams } from "react-router-dom";

function CohortView(){

    let {cid} =useParams();
    let navigate=useNavigate();
    let {state} = useLocation();
    return (
        <>
        <div className="container col-5 ">
        {/* <button onClick={()=>navigate("/training/cohort-list")} className="btn btn-info">Back to Cohort List</button> */}
        <button onClick={()=>navigate(-1)} className="btn btn-info"><i className="bi bi-backspace fs-5"></i>BACK </button>
        <div className="card">
        <div className="card-header bg-danger tex-light">
            <h3>Cohort Details for Cohort ID:{cid}</h3>
            {console.log(cid)}
        </div>
            <div className="card-body">
                <h6>Cohort Stack:{state.cohortStack}</h6>
                {/* <h6>Cohort Start Date:{state.cohortStartDate}</h6> */}
                <h6>Cohort Duration(in weeks):{state.cohortDurationWeeks}</h6>
            </div>
        </div>
        </div>
        </>
    );
}

export default CohortView;