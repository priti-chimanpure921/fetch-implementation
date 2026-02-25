//Method chaining

let url = "https://catfact.ninja/fact";
let promiseObject = fetch(url); // fetch(url) method returns a promise.

promiseObject.then((response)=>{
    console.log(response);
    return response.json();
})
.then((data)=>{
    console.log("fact 1:",data.fact);
    return fetch(url);
})
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log("fact 2:",data.fact);
})
.catch((error)=>{
    console.log(error);
});
