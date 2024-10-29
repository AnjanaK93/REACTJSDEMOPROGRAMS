import { useState } from "react";


function EcomAdd(){

    const [gadtgetData,setGadgetData] = useState(
        {
            productId:0,
            productName:"",
            productPrice:0,
            productImage:""
    });

function handleFormSubmit(event){
    //1.prevent the default nature of submit button
    event.preventDefault();
    console.log(gadtgetData);
}

    return (
        <>
        <div className="container">
            <div className="card">
                <form onSubmit={(e)=>handleFormSubmit(e)}>
                    <div className="card-header bg-success text-light">
                        <h3>ADD A NEW GADGET</h3>
                    </div>
                    <div className="card-body">
                        <div className="form-control-group m-1">
                            <label htmlFor="gName" className="form-label">
                                Gadget Name:
                            </label>
                            <input type="text" placeholder="Enter gadget name" id="gName" className="form-control"
                            onChange={(e)=>setGadgetData({...gadtgetData,productName:e.target.value})}
                            />
                        </div>
                        <div className="form-control-group">
                            <label htmlFor="gPrice" className="form-label">
                                Gadget Cost:
                            </label>
                            <input type="text" placeholder="Enter gadget cost" id="gPrice" className="form-control"
                            onChange={(e)=>setGadgetData({...gadtgetData,productPrice:e.target.value})}
                            />
                        </div>
                        <div className="form-control-group">
                            <label htmlFor="gImage" className="form-label">
                                Gadget Image URL:
                            </label>
                            <input type="text" placeholder="Enter gadget image url" id="gImage" className="form-control"
                            onChange={(e)=> setGadgetData({...gadtgetData,productImage:e.target.value})}
                            />
                        </div>
                        </div>
                        <div className="footer bg-success text-light">
                            <button type="submit" className="btn btn-light text-success" >
                                ADD
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

export default EcomAdd;