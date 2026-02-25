let response = `{
  "fact": "Cats lose almost as much fluid in the saliva while grooming themselves as they do through urination.",
  "length": 100
}`;
let response_object = JSON.parse(response);
console.log(response_object.fact);

let student = {
  name : "Priti",
  marks : 90
};
console.log(JSON.stringify(student));

