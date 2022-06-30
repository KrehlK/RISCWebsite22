/* Reading the file using default
 fs npm package*/
const fs = require("fs");
csv = fs.readFileSync("test_account.csv")

/* Convert the data to String and
 split it in an array*/
var array = csv.toString().split("\r");
let result = []; //array of objects

/* The array[0] contains all the
 header columns so we store them
 in headers array*/
let headers = array[0].split(", ")

/* Since headers are separated, we
 need to traverse remaining n-1 rows.*/
for (let i = 1; i < array.length-1; i++) {
let obj = {}

/* Create an empty object to later add
 values of the current row to it
 Declare string str as current array
 value to change the delimiter and
 store the generated string in a new
 string s*/
let str = array[i]
let s = ''

/* By Default, we get the comma separated values of a cell in quotes " " 
 so we use flag to keep track of quotes and split the string accordingly.
 If we encounter opening quote (") then we keep commas as it is otherwise
 we replace them with pipe |
 We keep adding the characters we traverse to a String s*/
let flag = 0
for (let ch of str) {
	if (ch === '"' && flag === 0) {
	flag = 1
	}
	else if (ch === '"' && flag == 1) flag = 0
	if (ch === ', ' && flag === 0) ch = '|'
	if (ch !== '"') s += ch
}

/* Split the string using pipe delimiter |
 and store the values in a properties array*/
let properties = s.split("|")

//store everything in an object JSON style
for (let j in headers) {
  properties[j] = properties[j].trim()
  console.log(properties[j]);
  split = properties[j].split(',');
  obj["username"] = split[0];
  obj["email"] = split[1];
  obj["password"] = split[2];
}

// Add the generated object to our result array
//console.log(obj)
result.push(obj)
}
//for (i = 0 ; i<result.length;i++){
  //console.log("Line " + i + result[i].item)
//}
//console.log(result)

function search(array, query) {
   let found = array.find(array => array.username === query.username && array.email === query.email && array.password === query.password)
   if(found.username === query.username && found.email === query.email && found.password === query.password){
     console.log("Data Retrieved: "+ found);
     return true;
   }else{
     return false;
   }
}
console.log("Is this user in our database? " + search(result, { username: 'krehl', email: 'krehl@fake.com', password: 'bacon' }));


