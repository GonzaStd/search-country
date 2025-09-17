const api = "https://restcountries.com/v3.1"

function objToStr(obj){
    let str
    let keys = Object.keys(obj);
    if (keys.length > 1){
        for (let key in keys) str += `${obj[key]}, `;
    }
    else {
        str = toString(obj[keys[0]]);
    }
    return str;
}

function arrToStr(arr){
    let str
    if (arr.length > 1){
        for (let value in arr) str += `${value}, `;
    }
    else {
        str = toString(arr[0]);
    }
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
    d=data[0];
    //console.log(d);
    let { capital, continents, currencies, languages, timezones, tld, area } = d;
    
}

function clearData(){
    return 0;
}