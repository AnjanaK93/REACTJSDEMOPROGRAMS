function Number(){
    let oddArr=[1,3,5,7,9];
    let evenArr=[2,4,6,8,10];

    let mappedOdd=oddArr.map((eachOdd)=><ul key={eachOdd}>{eachOdd}</ul>); 
    let mappedEven=evenArr.map((eachEven)=><ul key={eachEven}>{eachEven}</ul>); 
    let combinedData=[...mappedOdd,...mappedEven].sort((a,b)=>a.value-b.value);
    return (
        <>
        <p>Odd Numbers:{mappedOdd}</p>
        <p>Even Numbers:{mappedEven}</p>
        <h3>Combined Sorted List of Odd and Even Numbers</h3>
      
        {combinedData}
      


        </>
    );
}

export default Number; 