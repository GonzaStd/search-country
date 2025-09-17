const api = "https://restcountries.com/v3.1"

function searchCountry(e) {
    e.preventDefault();
    //let name=localStorage.getItem("cName")
    let name = document.querySelector("#cName").value;
    fetch(`${api}/name/${name}`)
        .then(response => response.json())
        .then(data => {
            processData(data);
        })
        .catch(error=>{console.log(`Error: ${error}`)});
    localStorage.setItem("cName", name);
}

function processData(data) {
    cData=data[0];
    console.log(cData);
    table = document.querySelector("#data");
    dataSelection = {
        capital: cData.capital,
        
    }
}