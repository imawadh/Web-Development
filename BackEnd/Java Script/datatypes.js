/*
Two types : 
primitive ---- simple /immutable
non - primitive --- complex / mutable 
primitive -- 8 dtata types 
non primitive --- object and array 


*/
// String as Primitive  Data Type 
var first_name = 'Awadh Kishor'
var last_name = "Singh"
console.log(first_name)
console.log(last_name)
//What type of data 
console.log(typeof(first_name))
var datatype_of_last_name = typeof(last_name)
console.log(datatype_of_last_name) 

// Single line comments
/*

Multi Line Comments 

*/

// Number data type ;
var num = 12
console.log(num)
console.log(typeof(num))
console.log(typeof num)

//big_variable name --- bigint

var big_num = 123n
console.log(big_num)
console.log(typeof(big_num))

// nan
console.log(typeof NaN)
console.log(typeof null)

var name 
console.log(typeof name)

var name  = "Awadh"
console.log(typeof name)

// Boolean 
console.log(typeof true)

// Symbol 
var Symbol_1 = Symbol()



// Non - Primitive Data Type :

//Objects 
/*

Real world entities ko represent karne ke liye we use opps ka proyog karte hai 

*/

var personal_data =
{
    name : "Awadh",
    age : 90,
    hobby : "Cricket"
}

/* Keys and values form like in python : key can be string / symbol 
and values can any data type 

*/

console.log(typeof personal_data)
console.log(personal_data)











