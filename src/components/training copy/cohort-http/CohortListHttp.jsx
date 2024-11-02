import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CohortListHttp(){
    const baseUrl="http://localhost:3000/cohorts";
    const [searchstack,setSearchStack]=useState(" ");
    const navigate=useNavigate(); //created for programmatic navigation
    const[allCohorts,setAllCohorts]=useState([]);
    const[filteredAllCohorts,setFilteredAllCohorts]=useState([...allCohorts]);
    const [allVenues,setAllVenues] =useState([]);

    

    function loadAllCohorts(){
       fetch(baseUrl)
      .then((res) => res.json())
      .then((data) => {
        setAllCohorts([...data]);
        setFilteredAllCohorts([...data]);
        console.log(data);
      });
    }

    useEffect(()=>{
        //here use fetch api
        loadAllCohorts();
    },[]);

    

    let mappedAllCohorts=filteredAllCohorts.map((eachCohort)=>(
        <tr key={eachCohort.id}>
            <td>{eachCohort.id}</td>
            <td>{eachCohort.cohortStack}</td>
            <td>{eachCohort.cohortSize}</td>
            <td>{eachCohort.cohortVenueId==0 ?(<button className="btn btn-success">MAP</button>):(eachCohort.cohortVenueId)}</td>   
            <td>{eachCohort.cohortStartDate}</td>
            <td>{eachCohort.cohortDurationWeeks}</td>
            {/* <td> */}
                {/* {addDays(
                eachCohort.cohortStartDate,
                eachCohort.cohortDurationWeeks * 7
                ).toLocaleDateString()} */}
            {/* </td> */}
            <td>{eachCohort.cohortSPOC}</td>
            <td>{eachCohort.cohortInstructor}</td>
            <td><button type="button" className="btn btn-outline-warning" onClick={()=>handleView(eachCohort.id)}><i className="bi bi-eye fs-4"></i></button></td>
            <td><button type="button" className="btn btn-outline-primary" onClick={()=>handleEdit(eachCohort.id)}><i className="bi bi-pencil-square fs-4"></i></button></td>
            <td><button type="button" className="btn btn-outline-danger" onClick={()=>handleDelete(eachCohort.id)}><i className="bi bi-trash fs-4"></i></button></td>
        </tr>
    ));

    function handleView(id){
        
        navigate("/training copy/cohort-view-http/" + id);
        // console.log(id);
    }

    function handleEdit(id){
        navigate("/training copy/cohort-edit-http/" + id);

    }

    function handleDelete(id){
        // let filteredData=allCohorts.filter((eachCohort)=>eachCohort.cohortId!=cohortId);
        // setAllCohorts(filteredData); 
        console.log(id);
        fetch(baseUrl + "/"+ id ,{method:"DELETE"})
        .then(res=>res.json())
        .then(data=>loadAllCohorts());   
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

export default CohortListHttp;