//Click counter ex-----
const first = document.getElementById("first");
const second = document.getElementById("second");
let i = 0;
const count = ()=>{
    console.log(i);
    i++;
}
function callBack() {
    return count();
  } 
  first.addEventListener("click", callBack);
  second.addEventListener("click", callBack);

  //Delay clicker ex----
  const time = document.getElementById("timeOut")
  time.addEventListener('click',()=>{
      setTimeout(() => {
          console.log("This text was delayed by 3 sec!")
      },3000);
  })

  //Page onload
  /*window.addEventListener("DOMContentLoaded", logOut);
function logOut() {
  console.log("DOM fully loaded and parsed")};
const page = () => {
console.log("DOM fully loaded and parsed");
}
  window.addEventListener('load',page);*/
window.addEventListener("load", () => console.log("DOM fully loaded and parsed"));

    
//Mouse position
/*outputToshow = document.getElementById("mousePosition");
headTag = document.querySelector("p");
function showTime(a){
    let x = a.clientX;
    let y = a.clientY;
    let coord ="X coords : " + x +", Y coords: "+y;
}
headTag.addEventListener("mouseover",showTime);*/



// document.getElementById("the-paragraph").addEventListener("mousemove", () => console.log("Mouse moved"));
const xCoordinates = [];
const yCoordinates = [];
function logMousePos() {
    document.onmousemove = function (e) {
    let cursorX = e.pageX; // or clientX, depending on context
    let cursorY = e.pageY; //clientY
    xCoordinates.push(cursorX);
    yCoordinates.push(cursorY);
    // console.log(cursorX, cursorY);
    };
}
logMousePos();
/* 1. Create a setTimeout function for 30 secs
    - Get x,y coordinates each time on mousemove 
    - store the data in array
    - get an average of them using reduce
*/
console.log(xCoordinates);
console.log(yCoordinates);
function getAverageCoordinates() {
    let avgXPos = xCoordinates.reduce((accumulator, currentValue) => accumulator + currentValue)/xCoordinates.length;
    let avgYPos = yCoordinates.reduce((accumulator, currentValue) => accumulator + currentValue)/yCoordinates.length;
    console.log(avgXPos.toFixed(2), avgYPos.toFixed(2));
}
setTimeout(getAverageCoordinates, 3000);


