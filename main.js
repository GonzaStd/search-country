const api = "https://restcountries.com/v3.1"

function searchLocal(){
    let data = localStorage.getItem('data');
    console.log(data);
    
}

function objToStr(obj){
    if (typeof(obj) === "number"){
        return obj;
    }
    let str = ""
    let keys = Object.keys(obj);
    for (let i in keys) {
        element = obj[keys[i]]
        if (typeof(element) === "object"){
            for (let j in element){
                str += `${element[j]}, `
            }
        }
        else {
            str += `${element}, `;
        }
    }
    let lastComma=str.lastIndexOf(", ");
    str = str.substring(0, lastComma);
    return str;
}

function searchCountry(e) {
    e.preventDefault();
    if (localStorage.getItem('data')) clearData();
    let name = document.querySelector("#cName").value;
    fetch(`${api}/name/${name}`)
        .then(response => response.json())
        .then(data => {
            processData(data);
        })
        .catch(error=>{console.log(`Error: ${error}`)});
}

function processData(data) {
    clearData();
    let tables = document.querySelector("#tables");
    for(let countryIndex in data){
        let table = document.createElement("table");
        let headRow = document.createElement("tr")
        tableId = `table${countryIndex}`;
        table.id = tableId;
        thProperty = document.createElement("th"); thProperty.textContent = "Property";
        thData = document.createElement("th"); thData.textContent = "Data";
        headRow.appendChild(thProperty);
        headRow.appendChild(thData);
        table.appendChild(headRow);
        d=data[countryIndex];
        let { name, capital, continents, currencies, languages, timezones, tld, area } = d
        let pairsList = Object.entries({ name,capital, continents, currencies, languages, timezones, tld, area });
        
        for(let i=0; i<8; i++){
            let row = document.createElement("tr");
            let tdProperty = document.createElement("td");
            let tdData = document.createElement("td");
            tdProperty.textContent = pairsList[i][0];
            tdData.textContent = objToStr(pairsList[i][1]);
            if (i==0) {
                tdProperty.style = "font-weight:bold;"
                tdData.style = "font-weight:bold;"
            }
            row.appendChild(tdProperty);
            row.appendChild(tdData);
            table.appendChild(row);
            console.log(`${pairsList[i][0]}: ${objToStr(pairsList[i][1])}`);
        }
        tables.appendChild(table);
    }
    
}

function clearData(){
    document.querySelectorAll("table").forEach(element => element.remove());
    return 0;
}