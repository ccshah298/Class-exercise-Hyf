//3ex-0
let numbers = [1 ,2, 3, 4, 5];
numbers.push(6);
numbers.unshift(0);
console.log("numbers adding in begaining and end "+(numbers));
numbers.pop(6);
numbers.shift(0);
console.log(numbers.toString());
/*console.log("lengh of numbers in array = "+(numbers.length));
for(let i=0; i< arr.length; i++)
console.log(arr[i]);
console.log('-----for of arr[i])----');*/
document.write(numbers.join(' ; ')); 
console.log("using include 2 : " +(numbers.includes(2)));

let fruits = ["Apples", "Pear", "Orange"];
let shoppingCart = fruits;
shoppingCart.push("Banana");
console.log("fruits length = "+(fruits.length));


//ex-1
let cat = {
    name : 'Bertie',
    breed : 'Cymric',
    color : 'white',
    greeting: function() {
      console.log('Meow!');
    }
  }
  //let catName = cat;
  console.log(cat['name']);
  console.log(cat.greeting());
 cat.color = 'black';
  console.log(cat);

  // ex-2
  let band = {
      name : 'maroon-5',
      country : 'USA',
      genre : 'American pop rock',
      members : 5,
      formed : 2001,
     split : false,
     album :  [{
         name : 'V',
         year : 2014
     },
    {
         name : 'over exposed',
         year : 2012
     }]
     
  }
  var bandInfo = band;
  console.log(`my fav band is called ${band.name}.it from ${band.country}. They are best in ${band.genre}.The group have ${band.members}members.They formed in ${band.formed}.,Are they split ?${band.split}.They relesed many albums fex..${band.album}`)

  // brain ex-
  const classmates = [{name:'Charmi',age:32},{name:'Rajani',age:30},{name:'Sandhana',age:31}];
  const myClassmate = 'Rajani'
  for(const classmate of classmates){
    if(classmate.name === 'ali'){
      console.log('charmi is in class')
    }
    else if(classmate.name === myClassmate){
      classmate.age = 10
    }
  }
  console.log(classmates);
  const emptyObject = {}
  if (emptyObject === null || emptyObject === undefined){
    console.log('is empty')
  }
  if(emptyObject === {}){
    console.log('is dead empty')
  }

  



 
