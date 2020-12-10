//Favorite dishes ex
let myFavDish = ['Pizza','Pasta','Burger','fries'];
let selectUl = document.querySelector('#dish');
for(i=0;i<myFavDish.length;i++){
    let addDish = document.createElement('li');
    addDish.innerHTML = myFavDish[i];
   selectUl.appendChild(addDish);
   
}

//Podcast ex
const podcasts = [{
    name: 'The mystery om of Johan Klausen Varbourg',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Tips about dogs with small legs',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'You, me, we and us',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Breakfast news - Dinner edition'
}
];
const body = document.querySelector('body');
let createUl = document.createElement('ul');
body.appendChild(createUl);

//for (const [key, value] of Object.entries(podcasts)){
for (let key in podcasts)
{  
    let createLi = document.createElement('li');
    let createH1 = document.createElement('h1');
    let createImg = document.createElement('img');
    createH1.innerHTML = podcasts[key].name;
    createLi.appendChild(createH1);
    if(podcasts[key].hasOwnProperty("imageUrl")){
    createImg.setAttribute("src",podcasts[key].imageUrl);
    createLi.appendChild(createImg);
    }
    createUl.appendChild(createLi);
}
//Simple eventlistener ex
let change = true;
document.getElementById("myBtn").addEventListener("click", function() {
    //document.getElementById("myBtn").innerHTML = "Button clicked";
    //document.body.style.background = "#cc6699";//Light mode dark mode ex
    //document.body.style.color = "white";
    if(change){
        document.getElementById("myBtn").innerHTML = "Button clicked";
        document.body.style.background = "#cc6699";
        document.body.style.color = "white";
        change = false;  
    }
    else{
        document.getElementById("myBtn").innerHTML = "Button";
        document.body.style.background = "yellow";
        document.body.style.color = "black";
        change = true;  

    }
  });

  //Image inserter
  
  function notThisFunctionName(imageUrl,elementToAppendImageTo){
    let imgMy = document.createElement('img');
    imgMy.src = imageUrl;
    elementToAppendImageTo.appendChild(imgMy);
    
  }
  notThisFunctionName('https://picsum.photos/300/300', document.querySelector('body'));
  
