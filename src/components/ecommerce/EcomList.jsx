import { useState } from "react";

function EcomList(){

    const [cart,setCart]=useState([]);
    const [totalItem,setTotalItem]=useState(0);
    const [wishlist, setWishlist] = useState([]);
    const [errorMessages, setErrorMessages] = useState({}); 
    let allProducts=[
        {
            productId:101,
            productName:"LAPTOP",
            productPrice:35000,
            productImage:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            productId:102,
            productName:"MOBILE",
            productPrice:18000,
            productImage:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            productId:103,
            productName:"WATCH",
            productPrice:4200,
            productImage:"https://images.unsplash.com/photo-1698729616509-060e8f58e6c0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D"
        },
         {
            productId:104,
            productName:"TABLET",
            productPrice:56000,
            productImage:"https://images.unsplash.com/photo-1590252973641-1352f1a8885e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGlwYWR8ZW58MHx8MHx8fDA%3D"
        }
        
    ];

    function wishlistToCart(productId) {
        const wishlistedProduct = allProducts.find((eachProduct) => eachProduct.productId === productId);

        if (wishlistedProduct) {
            setCart((prevCart) => [...prevCart, wishlistedProduct]);
            setWishlist((prevWishlist) => prevWishlist.filter((product) => product.productId !== productId));
        } else {
            console.error('Product not found in wishlist');
        }
    }

    function addToWishlist(productId) {
        const productToAdd = allProducts.find((eachProduct) => eachProduct.productId === productId);
        if (productToAdd && !wishlist.some((item) => item.productId === productId)) {
            setWishlist([...wishlist, productToAdd]);
            setErrorMessages((prev) => ({ ...prev, [productId]: "" }));
        } else {
            setErrorMessages((prev) => ({
                ...prev,
                [productId]: "Product already in wishlist !!",
            }));
        }
    }


    function addToCart(productId){
       let fetchedProduct =  allProducts.find((eachProduct)=>eachProduct.productId==productId);

       let newId=(cart.length==0 ? 1: cart[cart.length-1].cartId+1);
       setCart([...cart,{fetchedProduct,cartId:newId}]);//we cannot do this->cart.push(fetchedProduct)
        console.log(newId);
    }

    function deleteCartItem(cartId){
        let filteredCart =cart.filter((eachCartItem)=>eachCartItem.cartId!=cartId);
        setCart(filteredCart);
    }

    function deleteWishlistItem(productId) {
        let filteredWishlist = wishlist.filter((product) => product.productId !== productId);
        setWishlist(filteredWishlist);
    }

    let mappedCart=cart.map((eachCartItem)=>(
        <tr>
            {/* <td>{eachCartItem.fetchedProduct.productId}</td> */}
            <td>{eachCartItem.cartId}</td>
            <td>{eachCartItem.fetchedProduct.productName}</td>
            <td>{eachCartItem.fetchedProduct.productPrice}</td>
            <td><button className="btn btn-outline-danger" onClick={()=>deleteCartItem(eachCartItem.cartId)} >
                <i className="bi bi-trash"> </i></button></td>
       </tr>
    ))

     let mappedWishlist = wishlist.map((eachProduct) => (
        <tr key={eachProduct.productId}>
            <td>{eachProduct.productId}</td>
            <td>{eachProduct.productName}</td>
            <td>{eachProduct.productPrice}</td>
            <td>
                <button className="btn btn-outline-danger" onClick={() => deleteWishlistItem(eachProduct.productId)}>
                    <i className="bi bi-trash"></i>
                </button>
                <button className="btn btn-outline-success" onClick={()=>addToCart(eachProduct.productId)}>
                    <i className="bi bi-cart-plus"></i>
                </button>
            </td>
        </tr>
    ));

    let mappedAllProducts=allProducts.map((eachProduct)=>(
     <div className="col-sm-12 col-md-6 col-lg-3" key={eachProduct.productId}>
        <div className="card m-3">
            <img className="" src={eachProduct.productImage}></img>
            <div className="card-title text-center" >
                <h5>{eachProduct.productName}</h5>
            </div>
            <div className="card-text text-center" >
                <p>Product ID:{eachProduct.productId}</p>
            </div>
            <div className="card-text text-center" >
                <p>Product Price:{eachProduct.productPrice}</p>
            </div>
            <div className="text-centre " style={{ margin: '8px' }}>
                <button className="btn btn-outline-primary  w-40 ms-2" onClick={()=>addToCart(eachProduct.productId)}>
                <i className="bi bi-cart2" ></i></button>
            {/* </div>
            <div className="text-centre" style={{margin:'8px'}}> */}
                <button className="btn btn-outline-primary  w-40 ms-4" onClick={() => addToWishlist(eachProduct.productId)}>
                <i className="bi bi-heart" ></i></button>
            </div>
            {errorMessages[eachProduct.productId] && (
                        <div className="alert alert-warning mt-2">
                            {errorMessages[eachProduct.productId]}
                        </div>
                    )}
            
        </div>
        </div>
));

    return (
        <>
        <h1 style={{textAlign: 'center', color:"green"}}>E-Commerce Website</h1>
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <h3 style={{textAlign: 'center'}}>LIST OF GADGETS</h3>
                        <div className="row">{mappedAllProducts}</div>
                        
                    </div>
                    
                    <div className="col-3">
                        <h4>CART ITEMS</h4>  
                        {/* <i className="bi bi-cart3"></i> */}
                        {cart.length==0?(<p>Cart is EMPTY!!!<i className="bi bi-emoji-frown"></i></p>):(
                        <div>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>NAME</th>
                                    <th>PRICE</th>
                                </tr>
                            </thead>
                            <tbody>
                                {mappedCart}
                            </tbody>
                        </table>
                        <div>
                            
                            <p>Total Items:{cart.length}</p>
                            <p>Total Cost:{cart.reduce((sum,eachCartItem) =>sum + eachCartItem.fetchedProduct.productPrice,0)}</p>
                        </div>   
                    </div>
                    )}
                </div>
            </div>
            {/* <div className="row"> */}
                    <div className="col-3 offset-9">
                        <h3>WISHLIST</h3>
                        {/* <i className="bi bi-heart"></i> */}
                        {wishlist.length === 0 ? (<p>Wishlist is empty!!<i className="bi bi-emoji-frown"></i></p>) : (
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>NAME</th>
                                        <th>PRICE</th>
                                        <th>ACTIONS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mappedWishlist}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            {/* </div> */}
        </>
    );
}

export default EcomList;