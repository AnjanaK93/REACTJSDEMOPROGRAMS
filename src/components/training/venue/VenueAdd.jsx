import { useNavigate } from "react-router-dom";

function VenueAdd(){
    let navigate=useNavigate();
    return (
        <>
        <div className="container col-5" >
             <button onClick={()=>navigate("/training/venue-list")} className="btn btn-success"><i className="bi bi-backspace fs-5"></i>BACK </button>
            <div className="card square-card">
                    <div className="card-header bg-secondary text-light">
                        <h3>ADD A VENUE</h3>
                    </div>
                    <div className="card-body ">
                        <form>
                            <label htmlFor="vId">VENUE ID:</label>
                            <input type="text" placeholder="Enter the venue id" id="vID" className="form-control" required/>
                            <label htmlFor="vName">VENUE NAME:</label>
                            <input type="text" placeholder="Enter the venue name" id="vName" className="form-control" required/>
                            <label for="vSeater">VENUE Seater:</label>
                            <input type="text" placeholder="Enter the seater capacity" id="vSeater" className="form-control"/>
                            <label for="vSeater">VENUE Type:</label>
                                <select id="vSeater" className="form-control">
                                    <option value="">Select Venue Type</option>
                                    <option value="ac">AC</option>
                                    <option value="non-ac">NON-AC</option>
                                </select>
                            <label for="vCity">VENUE City:</label>
                            <input type="text" placeholder="Enter the venue city" id="vCity" className="form-control"/>
                            <label for="vState">VENUE State:</label>
                            <input type="text" placeholder="Enter the venue state" id="vState" className="form-control"/>
                        </form>
                    </div>
                    <div className="footer bg-secondary text-light">
                        <button type="submit" className="btn btn-light text-dark mx-4" >
                            ADD
                        </button>
                        <button type="reset" className="btn btn-light text-dark mx-4">
                            CLEAR
                        </button>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default VenueAdd;