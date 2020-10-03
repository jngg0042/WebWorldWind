const http = new XMLHttpRequest();
const url = "https://disc.gsfc.nasa.gov/service/datasets/jsonwsp";
const str = "Climate";
const search_request = {
    methodname: "search",
    type: "jsonwsp/request",
    version: "1.0",
    args: {"search": str}
  };
const hdrs = {"Content-Type": "application/json",
  "Accept": "application/json"};

const otherParam = {
    headers:hdrs,
    body:JSON.stringify(search_request),
    method:"POST"
};



function callClimate(){
    fetch(url, otherParam)
    .then(data=>{data.json()})
    .then(res=>{console.log(res)})
    .catch(error=>console.log(error))
}