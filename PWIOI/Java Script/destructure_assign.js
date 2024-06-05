// Destructure and assign the elements of the constants array to e, pi, gravity, humanBodyTemp, and waterBoilingTemp.
// Destructure and assign the elements of countries array to fin, est, sw, den, nor
// Destructure the rectangle object by its properties or keys.


// 1. Destructure and assign the elements of the constants array to e, pi, gravity, humanBodyTemp, and waterBoilingTemp.

const arr = [2.71,3.14,9.8,97.4,100]
let [e,pi,gravity,humanBodyTemp,waterBoilingTemp] = arr
console.log(e,pi,gravity,humanBodyTemp,waterBoilingTemp)

// 2. Destructure and assign the elements of countries array to fin, est, sw, den, nor

const countries = ['Finland','West Indices','Switerzarland','Denmark','North America']
let [fin, est, sw, den, nor] = countries
console.log(fin, est, sw, den, nor)

// 3.  Destructure the rectangle object by its properties or keys.

let rectangle = {
    length:20,
    width:10,
    area:200,
}
let {length: length_rect,width: width_rect, area:area_rect}=rectangle
console.log(length_rect, width_rect, area_rect)


let obj = {
    width: 20,
    height: 10,
    area: 200,
  };
  let {width,height,area}=obj
  console.log(width,height,area)