const data = require("./friends_data.json");
//Data Access

//console.log(data);
//console.log(data.friends[0]);
//console.log(data.friends[0].name);

//Data Modify
// data.friends[0].name="Pankaj";
// console.log(data.friends[0].name);

//Data Delete
//delete data.friends[0].name;
//console.log(data);

//const data = require("./students_data.json");
//console.log(data.students[1].languages[0]);

//data show by loop
/*
for(x in data){
    //console.log(x);
    console.log(data[x]);
}
*/

/*
const data2 = {
    name : "Rayhan",
    age : 25
}
*/

//convert javascript to json data
//console.log(JSON.stringify(data2));

//convert json data to javascript format
console.log(JSON.parse('{"name" : "Chandan"}'));