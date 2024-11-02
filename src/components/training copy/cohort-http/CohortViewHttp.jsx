import { useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function CohortViewHttp(){
    const baseUrl="http://localhost:3000/cohorts";
    let [fetchedCohort, setFetchedCohort] = useState({
    id: 0,
    cohortSize: 0,
    cohortVenueId: 0,
    cohortStack: "",
    cohortStartDate: "",
    cohortDurationWeeks: 0,
    cohortSPOC: "",
    cohortInstructor: "",
  });

    let{cid} =useParams();
    let navigate=useNavigate();
    let {state} = useLocation();

    useEffect(() => {
    fetch(baseUrl + "/" + cid)
      .then((res) => res.json())
      .then((data) => setFetchedCohort(data));
  }, []);
    return (
        <>
        <div className="container col-5 ">
        {/* <button onClick={()=>navigate("/training/cohort-list")} className="btn btn-info">Back to Cohort List</button> */}
        <button onClick={()=>navigate(-1)} className="btn btn-info"><i className="bi bi-backspace fs-5"></i>BACK </button>
        {fetchedCohort.cohortStack == "" ? (
          ""
        ) : (
        <div className="card">
        <div className="card-header bg-danger tex-light">
            {/* {console.log(id)}; */}
            <h3>Cohort Details for Cohort ID:{cid}</h3>
        </div>
            <div className="card-body">
                <h6>Cohort Stack:{fetchedCohort.cohortStack}</h6>
                <h6>Cohort Start Date:{fetchedCohort.cohortStartDate}</h6>
                <h6>
                    Cohort Start Date :
                {new Date(fetchedCohort.cohortStartDate).toDateString()}
                </h6>
            </div>
        </div>
        )}
        </div>
        </>
    );
}

export default CohortViewHttp;