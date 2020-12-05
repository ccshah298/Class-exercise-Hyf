// condition exercises
const balance = 1000;

if(balance <= 0){
    console.log ('Please deposit some money!');
}
else if(balance <= 1000){
    console.log ('Your balance is looking okay');

}
else if (balance > 1000 ) {
    console.log ('Your balance is looking good');
}
else if (balance <= 10000) {
    console.log ('Your balance is fantastic');
}
else
   {console.log ('Your balance is AMAZING!');}
//terenory exercises
   let c = 3 ;
   let d = 1;
   let result = c + d < 4 ? 'below':'over';
   console.log(result);

   //function exercises
   function min(j,k){
    
    return j < k ? j : k;
   }
   console.log(min(3,2))
   


   function celciusToFahreneit(celcius){
       let temperature =(celcius)*9/5+32;
       return temperature;   
   }
   console.log(celciusToFahreneit(3) +"f");

   function getCircleArea(redius){
       let circleArea =Math.PI * redius*redius;
       return circleArea
   }
   console.log(getCircleArea (5));


   //loop exercises
   //loop 1
   

/*for(let i = 10; i >= 0; i--;){
    
    if(i==10) {console.log("countdown begains");}
    else if(i==0){console.log("happy new year");}
    else {console.log(i);}
    
}*/



let i=10;
while (i >= 0)
{
    if(i==10) {console.log("COUNTDOWN BEGAINS");}
    else if(i==0){console.log("HAPPY NEW YEAR ");}
    else {console.log(i);}
    i--;
}

//loop 2

let friendList = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
let count=0;
for (let i=0; i < friendList.length; i++)
{
    if (friendList[i].includes('a'))
        {
            count= count+1; 
        }
}
console.log("Total Names having 'a' is : "+count);

//loop 3

//let friendList = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

for( let i=0;i < friendList.length; i++ ){
    console.log("Total : "+ i);
    if (friendList[i]=='Lola'){

        console.log("found "+friendList[i]);
        break;
        //i=friendList.length;
    }
}


