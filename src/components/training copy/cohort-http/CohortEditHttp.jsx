import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

function CohortEditHttp(){
    let navigate=useNavigate();
    let {cid} = useParams();
    const baseUrl="http://localhost:3000/cohorts";
    const [cohortData,setCohortData] = useState(
        {
            id:0,
            cohortSize:0,
            cohortVenueId:0,
            cohortStack:"",
            cohortStartDate:"",
            cohortDurationWeeks:0,
            cohortSPOC:"",
            cohortInstructor:""
        }
    );

    const [cohortErrorData, setCohortErrorData] = useState({
    cohortStack: true,
    cohortSize: true,
    cohortStartDate: true,
    cohortDuration: true,
  });

    useEffect(() => {
        fetch(baseUrl + "/" + cid)
        .then((res) => res.json())
        .then((data) => setCohortData(data));
    }, []);

    function handleFormChange(event) {
    setCohortErrorData({
      ...cohortErrorData,
      [event.target.name]: event.target.validity.valid,
    });

    setCohortData({ ...cohortData, [event.target.name]: event.target.value });
  }

    function handleFormSubmit(event){
        event.preventDefault();
        console.log(cohortData);

        fetch(baseUrl, {
            method:"PUT",
            body: JSON.stringify(cohortData),
            headers:{"Content-Type" : "application/json"},
        })
        .then(res=>res.json())
        .then(data=>navigate("/training copy/cohort-list-http"));
        
    }
    
    return (
        <>
        <div className="container m-5">
        <div className="card">
          <form onSubmit={(e) => handleFormSubmit(e)}>
            <div className="card-header bg-success text-light">
              <h3>UPDATE COHORT</h3>
            </div>
            <div className="card-body">
              <div className="form-control-group m-1">
                <label htmlFor="cStack" className="form-label">
                  Cohort Stack:
                </label>
                <input
                  type="text"
                  id="cStack"
                  placeholder="Enter Cohort Stack"
                  value={cohortData.cohortStack}
                  className="form-control"
                  required
                  name="cohortStack"
                  onChange={(e) => handleFormChange(e)}
                ></input>
                <div className="text-danger small">
                  {cohortErrorData.cohortStack
                    ? ""
                    : "Cohort Stack is Required!"}
                </div>
              </div>
              <div className="form-control-group m-1">
                <label htmlFor="cSize" className="form-label">
                  Cohort Stack:
                </label>
                <input
                  type="text"
                  id="cSize"
                  placeholder="Enter Cohort Size"
                  value={cohortData.cohortSize}
                  className="form-control"
                  required
                  name="cohortSize"
                  onChange={(e) => handleFormChange(e)}
                ></input>
                <div className="text-danger small">
                  {cohortErrorData.cohortSize ? "" : "Cohort Size is Required!"}
                </div>
              </div>
              <div className="form-control-group m-1">
                <label htmlFor="cStartDate" className="form-label">
                  Cohort Start Date:
                </label>
                <input
                  type="date"
                  id="cStartDate"
                  placeholder="Enter Cohort Start Date"
                  value={new Date(cohortData.cohortStartDate)}
                  className="form-control"
                  required
                  name="cohortStartDate"
                  onChange={(e) => handleFormChange(e)}
                ></input>
                <div className="text-danger small">
                  {cohortErrorData.cohortStartDate
                    ? ""
                    : "Cohort Start Date is Required!"}
                </div>
              </div>
              <div className="form-control-group m-1">
                <label htmlFor="cDuration" className="form-label">
                  Cohort Duration:
                </label>
                <input
                  type="text"
                  id="cDuration"
                  placeholder="Enter Cohort Duration"
                  value={cohortData.cohortDurationWeeks}
                  className="form-control"
                  required
                  name="cohortDurationWeeks"
                  onChange={(e) => handleFormChange(e)}
                ></input>
                <div className="text-danger small">
                  {cohortErrorData.cohortDuration
                    ? ""
                    : "Cohort Duration is Required!"}
                </div>
              </div>
            </div>
            <div className="card-footer bg-success text-light">
              <button type="submit" className="btn btn-light text-success">
                UPDATE
              </button>
              <button type="reset" className="btn btn-light text-success mx-5">
                CLEAR
              </button>
            </div>
          </form>
        </div>
      </div>
        </>
    );
}

export default CohortEditHttp;