import { useState } from "react";

function CohortList(){
    const[allCohorts,setAllCohorts]=useState([
       {
        cohortId:101,
        cohortSize:26,
        cohortVenueId:0,
        cohortStack:"Java Full Stack",
        cohortStartDate:"2024-12-12",
        cohortDurationWeeks:6,
        cohortSPOC:"",
        cohortInstructor:""
       } ,
       {
        cohortId:201,
        cohortSize:30,
        cohortVenueId:101,
        cohortStack:"Python Full Stack",
        cohortStartDate:"2024-12-12",
        cohortDurationWeeks:6,
        cohortSPOC:"",
        cohortInstructor:""
       } 
    ]);

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

    let mappedAllCohorts=allCohorts.map((eachCohort)=>(
        <tr key={eachCohort.cohortId}>
            <td>{eachCohort.cohortId}</td>
            <td>{eachCohort.cohortStack}</td>
            <td>{eachCohort.cohortSize}</td>
            <td>{eachCohort.cohortVenueId==0 ?(<button className="btn btn-success">MAP</button>):(eachCohort.cohortVenueId)}</td>   
            <td>{eachCohort.cohortStartDate}</td>
            <td>{eachCohort.cohortDurationWeeks}</td>
            <td>{eachCohort.cohortSPOC}</td>
            <td>{eachCohort.cohortInstructor}</td>
            <td><button type="button" className="btn btn-outline-danger" onClick={()=>handleView(eachCohort.cohortId)}>VIEW</button></td>
            <td><button type="button" className="btn btn-outline-danger" onClick={()=>handleEdit(eachCohort.cohortId)}>EDIT</button></td>
            <td><button type="button" className="btn btn-outline-danger" onClick={()=>handleDelete(eachCohort.cohortId)}><i className="bi bi-trash"></i></button></td>
        </tr>
    ));

    function handleView(venueId){
        console.log(venueId);
    }

    function handleEdit(){

    }

    function handleDelete(cohortId){
        let filteredData=allCohorts.filter((eachCohort)=>eachCohort.cohortId!=cohortId);
        setAllCohorts(filteredData);    
    }

    return (
        <>
        <div className="container m-5"></div>
        <h3>COHORT LIST</h3>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>STACK NAME</th>
                    <th>SIZE</th>
                    <th>VENUE ID</th>
                    <th>START DATE</th>
                    <th>DURATION(in weeks)</th>
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