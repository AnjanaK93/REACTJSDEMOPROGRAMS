import { useState } from "react";



function EcomAddValidation(){

    const [gadgetData,setGadgetData] = useState(
        {
            productId:0,
            productName:"",
            productPrice:0,
            productImage:""
    });

    const [gadgetErrorData, setGadgetErrorData] = useState(
        {
            productId:true,
            productName:true,
            productPrice:true,
            productImage:true
        }
    );

function handleFormSubmit(event){
    //1.prevent the default nature of submit button
    event.preventDefault();
    console.log(gadgetData);
}

function handleFormChange(event){
    setGadgetErrorData({...gadgetErrorData, [event.target.name]:event.target.validity.valid});
    setGadgetData({...gadgetData, [event.target.name]:event.target.value});
    // setGadgetData({...gadtgetData,productName:e.target.value})
    // setGadgetData({...gadtgetData,productPrice:e.target.value})
    console.log(event);

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
                            <input type="text" name="productName" placeholder="Enter gadget name" id="gName" className="form-control" required
                            onChange={(e)=>handleFormChange(e)}
                            />
                            <div className="text-danger small">{gadgetErrorData.productName ? "": "Gadget Name is reqired!!"}
                            </div>
                            <div className="text-danger small">{gadgetData.productName.length>=3 ? "": "Gadget Name should be of minimum 3 characters!!"}
                            </div>
                        </div>
                        <div className="form-control-group">
                            <label htmlFor="gPrice" className="form-label">
                                Gadget Cost:
                            </label>
                            <input type="text" name="productPrice" placeholder="Enter gadget cost" id="gPrice" className="form-control" 
                            required minLength={3}
                            onChange={(e)=> handleFormChange(e)}
                            />
                            <div className="text-danger small">{gadgetErrorData.productPrice ? "": "Gadget Cost is reqired!!"}
                            </div>
                            
                            
                        </div>
                        <div className="form-control-group">
                            <label htmlFor="gImage" className="form-label">
                                Gadget Image URL:
                            </label>
                            <input type="text" placeholder="Enter gadget image url" id="gImage" className="form-control"
                            onChange={(e)=> setGadgetData({...gadgetData,productImage:e.target.value})}
                            />
                        </div>
                        </div>
                        <div className="footer bg-success text-light">
                            <button type="submit" className="btn btn-light text-success" >
                               <i className="bi bi-cart-plus"> ADD</i>
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

export default EcomAddValidation;