// Question 1
const convertFahrToCelsius=(r)=>{
 if(isNaN(r)){
     console.log(r + ' '+'is not a valid number but a/an'+' '+ typeof(r))
 }else{
     let C = (r - 32)*5/9;
     let Result=C.toFixed(4);
     console.log(r+'deg'+' '+'F =')
     console.log(Result +' '+ 'deg C')
 }
}
// Calling the Function
console.log('Question 1, Answer!')
convertFahrToCelsius(0);
console.log('')









// Question 2

let array = []

const checkYuGiOh =(input)=>{
 if(isNaN(input)){
     console.log('invalid parameter:'+ " "+ input)
 }else{
     for (let i = 2; i <= input; i = i + 2) {
         array[i] = 'yu'
         }
         for (let i = 3; i <= input; i = i + 3) {
         if (array[i]) {
             array[i] += '-gi'
         } else {
             array[i] = 'gi'
         }
         
         }
         for (let i = 5; i <= input; i = i + 5) {
         if (array[i]) {
             array[i] += '-oh'
         } else {
             array[i] = 'oh'
         }
         
         }
         for (let i = 1; i <= input; i++) {
         if (!(array[i])) {
             array[i] = i
         }
         }
         array.splice(0, 1); 
         console.log(array);
 }

}


// Calling the Function
console.log('Question 2, Answer!')
checkYuGiOh(5)