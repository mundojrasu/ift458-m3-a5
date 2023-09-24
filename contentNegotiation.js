import fetch from "node-fetch";
var query = "https://swapi.co/api/people/1/";

fetch(query, {
  method: "GET",
  headers: {
    "Content-Type": "application/xml",
    Accept: "application/json",
    "User-Agent": "*",
  },
})
  .then(function (response) {
    console.log(`response = ${response}`); //json
    return response.text();
  })
  .then(function (xml) {
    //convert to workable json
    console.log(`XML = ${xml}`); //json
  })
  .catch((error) => {
    console.log("Error:", error); //json
  });
