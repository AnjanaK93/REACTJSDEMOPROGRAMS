function FruitObjectArray(){

    let allFruits=[
        {
            fruitId:201,
            fruitName:"Apple",
            fruitEmoji:"🍏"
        },
        {
            fruitId:202,
            fruitName:"Mango",
            fruitEmoji:"🥭"
        },
        {
            fruitId:203,
            fruitName:"Orange",
            fruitEmoji:"🍊"
        }
    ];

    let mappedAllFruits =allFruits.map((eachFruit)=><li key={eachFruit}>{eachFruit.emoji},{eachFruit.fruitId} : {eachFruit.fruitName}</li>);
    return (
    <>
    <h2>Fruit Array Component</h2>
    <h4>List of Fruits</h4>
    <ul>
        {mappedAllFruits}
    </ul>
    </>
    );
}

export default FruitObjectArray;