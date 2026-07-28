const requestOptions = {
  method: "GET",
  redirect: "follow"
};

/*("https://api.github.com/users", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log("Line 9")
    console.log('type of result', typeof result)
    console.log(result)
})
  .catch((error) => console.error(error));*/

let flowState = "This is the flow state";
console.log('66', flowState);

let results = function (){
  fetch("https://api.github.com/users", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log("Line 9")
    console.log('type of result', typeof result)
    console.log(result)
})
  .catch((error) => console.error(error));
  flowState = "Updated state";
}  

//testFunc();
console.log(results)
console.log('999', flowState);