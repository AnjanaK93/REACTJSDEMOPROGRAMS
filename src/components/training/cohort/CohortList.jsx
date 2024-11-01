import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CohortList(){
    const [searchstack,setSearchStack]=useState(" ");
    const navigate=useNavigate();
    
    const[allCohorts,setAllCohorts]=useState([
       {
        cohortId:101,
        cohortSize:26,
        cohortVenueId:0,
        cohortStack:"Java Full Stack",
        cohortStartDate:new Date("2024-12-12"),
        cohortDurationWeeks:6,
        cohortSPOC:"",
        cohortInstructor:""
       } ,
       {
        cohortId:201,
        cohortSize:30,
        cohortVenueId:101,
        cohortStack:"Python Full Stack",
        cohortStartDate:new Date("2024-12-12"),
        cohortDurationWeeks:6,
        cohortSPOC:"",
        cohortInstructor:""
       } 
    ]);
    const[filteredAllCohorts,setFilteredAllCohorts]=useState([...allCohorts]);

    const [allVenues,setAllVenues] =useState([
        {
            venueId:101,
            venueName:"Pallavas",
            venueSeater:30,
            isVenueAC:true,
            venueCity:"Trivandrum",
            venueState:"Kerala"
        }
    ]);

    

    let mappedAllCohorts=filteredAllCohorts.map((eachCohort)=>(
        <tr key={eachCohort.cohortId}>
            <td>{eachCohort.cohortId}</td>
            <td>{eachCohort.cohortStack}</td>
            <td>{eachCohort.cohortSize}</td>
            <td>{eachCohort.cohortVenueId==0 ?(<button className="btn btn-success">MAP</button>):(eachCohort.cohortVenueId)}</td>   
            <td>{eachCohort.cohortStartDate.toLocaleDateString()}</td>
            <td>{eachCohort.cohortDurationWeeks}</td>
            <td>
                {addDays(
                eachCohort.cohortStartDate,
                eachCohort.cohortDurationWeeks * 7
                ).toLocaleDateString()}
            </td>
            <td>{eachCohort.cohortSPOC}</td>
            <td>{eachCohort.cohortInstructor}</td>
            <td><button type="button" className="btn btn-outline-warning" onClick={()=>handleView(eachCohort.cohortId)}><i className="bi bi-eye fs-4"></i></button></td>
            <td><button type="button" className="btn btn-outline-primary" onClick={()=>handleEdit(eachCohort.cohortId)}><i className="bi bi-pencil-square fs-4"></i></button></td>
            <td><button type="button" className="btn btn-outline-danger" onClick={()=>handleDelete(eachCohort.cohortId)}><i className="bi bi-trash fs-4"></i></button></td>
        </tr>
    ));

    function handleView(cohortId){
        console.log(cohortId);
        let getCohort = allCohorts.filter((eachCohort)=>eachCohort.cohortId==cohortId);
        navigate("/training/cohort-view/" + cohortId ,{state:getCohort[0]});
    }

    function handleEdit(){

    }

    function handleDelete(cohortId){
        let filteredData=allCohorts.filter((eachCohort)=>eachCohort.cohortId!=cohortId);
        setAllCohorts(filteredData);    
    }

    function handleSearch(event) {
    setSearchStack(event.target.value);
    let filterAllCohort = allCohorts.filter((eachCohort) =>
      eachCohort.cohortStack
        .toLowerCase()
        .includes(event.target.value.toLowerCase())
    );
    setFilteredAllCohorts([...filterAllCohort]);
    
  }

   function addDays(date, days) {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
  }

    return (
        <>
        <div className="container text-center m-5"></div>
        <h3>COHORT LIST</h3>
        <div className="form-control-group">
        <label htmlFor="stack" className="form-label">SEARCH STACK:</label>
        <input type="text" id="stack" className="form-control" placeholder="Enter search string"
       onChange={(e) => handleSearch(e)} style={{ width: '300px', height: '40px' }} />

        </div>
        <table className="table table-striped text-center">
            <thead className="table-danger">
                <tr>
                    <th>ID</th>
                    <th>STACK NAME</th>
                    <th>SIZE</th>
                    <th>VENUE ID</th>
                    <th>START DATE</th>
                    <th>DURATION(in weeks)</th>
                    <th>END DATE</th>
                    <th>SPOC</th>
                    <th>INSTRUCTOR</th>
                </tr>
            </thead>
            <tbody>
                {mappedAllCohorts}
            </tbody>
        </table>
        </>
    );
}

export default CohortList;