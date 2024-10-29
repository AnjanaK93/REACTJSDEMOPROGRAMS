import ProductItem from "./ProductItem.jsx";

function ProductList(){
    let allProducts=[
        {
            productId:101,
            productName:"Laptop",
            productPrice:35000,
            productImage:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            productId:102,
            productName:"Mobile",
            productPrice:18000,
            productImage:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            productId:103,
            productName:"Watch",
            productPrice:4200,
            productImage:"https://images.unsplash.com/photo-1698729616509-060e8f58e6c0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D"
        },
         {
            productId:104,
            productName:"IPad",
            productPrice:56000,
            productImage:"https://images.unsplash.com/photo-1590252973641-1352f1a8885e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGlwYWR8ZW58MHx8MHx8fDA%3D"
        }
        
    ];

    let mappedAllProducts=allProducts.map((eachProduct)=>(<ProductItem data={eachProduct}></ProductItem>));


    return (
        <>
        <div className="container">
            <h3>LIST OF PRODUCTS</h3>
            <div className="row">
                    {mappedAllProducts}
            </div>

        </div>
        </>
    );
}

export default ProductList