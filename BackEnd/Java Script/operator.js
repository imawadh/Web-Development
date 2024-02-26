console.log(4+5)

// Assignment Operator 

var name = "Awadh"
console.log(name)

// Arithmetic operator 

console.log(8+7*45)
console.log(88/89)


// Increment and Decrement Opeartpor 

var i  =  5
console.log(i++) // 5
console.log(++i) // 7
console.log(--i) // 6
console.log(i--) // 6
console.log(i) // 5

// Comaprison operator 

console.log(1==2)
console.log(1==1)
console.log(1=='1')
console.log(1!='1')

/// Strict equality check 
console.log(1==='1')
console.log(1!=='1')


/*
Compartive Operator */
console.log(3>=4)

// Logical Operator 
/* 
T and T =  T
else : False 

i.e: 
A  B  AND
  T  T  T
  T  F  F
  F  T  F
  F  F  F
  

and
F or F = F 
agar ek bhi true so output will be true and else it it will be false 
 A  B  OR
  T  T  T
  T  F  T
  F  T  T
  F  F  F
  

XOR Operator 
A  B  XOR
  T  T  F
  T  F  T
  F  T  T
  F  F  F
  

*/

console.log(3>4 && true) //False                    

console.log(3>4 || true) // True

console.log(3>4 ^ true)  // True          
console.log(3<4 ^ true)  // False          


// Bitwise Operator 
console.log(10 & 6) // Bitwise and 
/*
10 = 1010
6  = 0110
using and operator we get 0010 which is equal to 2
*/
console.log(10 | 6)
/*
similarly using 10 = 1010
6 = 0110
we get 
1110 = 14
*/


