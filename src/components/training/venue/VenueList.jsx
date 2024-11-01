import { useState } from "react";

export default function VenueList(){

    const [allVenues,setAllVenues] =useState([
        {
            venueId:101,
            venueName:"Pallavas",
            venueSeater:30,
            isVenueAC:true,
            venueCity:"Trivandrum",
            venueState:"Kerala"
        },
         {
            venueId:102,
            venueName:"Cholans",
            venueSeater:30,
            isVenueAC:true,
            venueCity:"Trivandrum",
            venueState:"Kerala"
        }
    ]);
    let mappedAllVenues= allVenues.map((eachVenue)=>
    <tr key={eachVenue.venueId}>
        <td>{eachVenue.venueId}</td>
        <td>{eachVenue.venueName}</td>
        <td>{eachVenue.venueSeater}</td>
        <td>{eachVenue.isVenueAC ? "AC" :"NON-AC" }</td>
        <td>{eachVenue.venueCity}</td>     
        <td>{eachVenue.venueState}</td>
        <td><button type="button" className="btn btn-primary" onClick={()=>handleView(eachVenue.venueId)}><i className="bi bi-eye fs-4"></i></button></td>
        <td><button type="button" className="btn btn-primary" onClick={()=>handleEdit(eachVenue.venueId)}><i className="bi bi-pencil-square fs-4"></i></button></td>
        <td><button type="button" className="btn btn-primary" onClick={()=>handleDelete(eachVenue.venueId)}><i className="bi bi-trash fs-4"></i></button></td>
    </tr>
    );

    function handleView(venueId){
        console.log(venueId);
    }

    function handleEdit(){

    }

    function handleDelete(venueId){
        let filteredData=allVenues.filter((eachVenue)=>eachVenue.venueId!=venueId);
        setAllVenues(filteredData);    
    }
    return (
        <>
        <div className="container m-5"></div>
        <h3>VENUE LIST</h3>
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>SEATER CAPACITY</th>
                    <th>AC/NON-AC</th>
                    <th>CITY</th>
                    <th>STATE</th>
                </tr>
            </thead>
            <tbody>
                {mappedAllVenues}
            </tbody>
        </table>
        </>
    );
}