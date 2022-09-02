
//build html  elements
document.body.innerHTML = `
<div class= "heading-container">
    <h1>Brewer List </h1>
    <img class = "icon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiUdftCDAoP5IoDii6ah-s3Eve4c1U6TjL6w&usqp=CAU" width="200px" height="150px"  alt="brewery"/>
</div>
<div class="main-container" id="mainContainer"></div>
`;

// create a  function to fetch the data from the API
const getData = async()=>{
    try{
        const data = await fetch("https://api.openbrewerydb.org/breweries");
        const breweries = await data.json();
        breweries.forEach((brewery)=>{
            displayData(brewery);
        })
    }catch(error){
        console.log(error);
    }
}
getData();

//display data 
const displayData = (obj)=>{
    mainContainer.innerHTML += 
    `<div class="container">
    <h3>brewery Name: ${obj.name}</h3>
    <p>Address: ${obj.street}</p>
    <p>City: ${obj.city}</p>
    <p>State: ${obj.state}</p>
    <p>Phone: ${obj.phone}</p>
    `
}
