//Meal ordering website ex--- in json file
//Astronauts in space

const dataAstronauts = fetch("http://api.open-notify.org/astros.json").then(
  (response) =>
    response.json().then((dataAstro) => {
      const h1 = document.createElement("h1");
      h1.innerHTML = `There are ${dataAstro.number} astronauts in space, they are:
    `;
      document.body.appendChild(h1);

      dataAstro.people.forEach((person) => {
        const h3 = document.createElement("h3");
        h3.innerHTML = person.name;
        document.body.appendChild(h3);
      });
    })
);

//Dog fan website
//1)random dog image and display it in the browser
const img = document.createElement("img");
document.body.appendChild(img);
 fetch("https://dog.ceo/api/breeds/image/random").then(
    (response)=>
    response.json().then((dataDog)=>{
        img.style.width = "100px";
        img.src = dataDog.message;
    })
);
//2)new image every 2 sec.
setInterval(() => {
    fetch("https://dog.ceo/api/breeds/image/random").then(
    (response)=>
    response.json().then((dataDog)=>{
        img.style.width = "100px";
        img.src = dataDog.message;
    })
);    
}, 2000);
//3)Get the list of all breeds
let dogBreeds = [];

function getDogBreeds() {
  return fetch("https://dog.ceo/api/breeds/list/all")
    .then((response) => response.json())
    .then((data) => {
      dogBreeds = Object.keys(data.message);
    });
}

const randomNumber = Math.floor(Math.random() * Math.floor(94));
const div = document.createElement("div");
div.style.color = "blue";

getDogBreeds().then(() => {
  fetch(`https://dog.ceo/api/breed/${dogBreeds[randomNumber]}/images/random`)
    .then((response) => response.json())
    .then((data) => {
      const imageBreed = document.createElement("img");
      document.body.appendChild(imageBreed);
      imageBreed.src = data.message;
      div.innerHTML = dogBreeds[randomNumber]; //5
      document.body.appendChild(div);
    });
});
