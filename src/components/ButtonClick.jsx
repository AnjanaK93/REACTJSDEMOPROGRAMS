function ButtonClick(){
    let count=0;
    function handleClick(){
        console.log("Clicked");
        console.log(count);
        count++;
    }
    return (
        <>
        <button className="btn btn-primary" onClick={handleClick}>Click Me...</button>
        <div>{count}</div>
    
        </>
    );
}

export default ButtonClick;