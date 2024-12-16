let arr = [1,2,3,4,"Ram",'?']; 
console.log(arr);
console.log("Length of Array is :: ", arr.length)

console.log("Second Last element of array is :: ",arr[arr.length-2])

console.log("Original Complete array is :: ")
for(let i = 0;i <arr.length; i++)
{
    console.log(arr[i]);
}


// push method in javascript it can push one element as well as multiple element at a time 

arr.push("Rohan ")
arr.push(876543)
arr.push(1,2,3,90)
console.log("Pushed Element Complete array is :: ")
for(let i = 0;i <arr.length; i++)
{
    console.log(arr[i]);
}


// Pop () method in Javascript 
arr.pop()
console.log("Pop method in jss  Complete array is :: ")
for(let i = 0;i <arr.length; i++)
{
    console.log(arr[i]);
}



console.log("Upadating Value in the array :: "
)
arr[0]="Roshan";
console.log("Upadated Array  Complete array is :: ")
for(let i = 0;i <arr.length; i++)
{
    console.log(arr[i]);
}



// Aveage marks caclculation
let marks = [12,12,3,4,5];
let sum = 0;
for (let i =0; i<marks.length; i++){
    sum+=marks[i];
}
// console.log(sum);
let average = sum / arr.length;
console.log("The average is :: ",average);



// Minimum of number in marks 
let m =marks[0];
for (let i =0; i<marks.length; i++){
    if(marks[i]<m){
        m = arr[i];
    }
}

// console.log(sum);
console.log("The Minumim is :: ",m);

// alert("Hello mai alert hu");



//Delete method in Js 
console.log(arr[0]);
delete(arr[0]);
console.log(arr[0]);

// Shift method in js 
console.log("Shift Method ");
arr.shift();
for(let i = 0;i <arr.length; i++)
{
    console.log(arr[i]);
}

// Unshift method 
console.log("UNShift Method ");
arr.unshift(67);
for(let i = 0;i <arr.length; i++)
{
    console.log(arr[i]);
}


// Tostring mThdod in java
console.log("toString Method in java :: output on array arr ")
let str = arr.toString()
console.log(str)


// Concat Method 
console.log("Conacat Method :: ")
conactaed_array = arr.concat(arr +marks)
console.log(conactaed_array)

//? It is not working correctly 
// ! Indexof()  method and lastIndexof()  method in java 

// console.log("Index of 3 in arr",indexof(1))



// Join method JavaScript 
let arr1 = ['Hello', 'World']
let s = arr1.join(' ');
console.log("Join method in JS ",s)



// Slice method in javascript 
console.log(" Slice method in Java Script :: ")
console.log(arr.slice(1,6));

arr.forEach(element => {
    console.log(element);
});


// Element + Element using For loop 

console.log("2*array Elemnt ");
for(let i =0;i <marks.length; i++)
{

    marks[i]+=marks[i];
    console.log(marks[i]);

}

let marksDoubled =  marks.map(x => x+x);
console.log("Doubled marks in marks array :: ");
for(let i =0;i <marksDoubled.length; i++)
{

    console.log(marksDoubled[i]);

}
