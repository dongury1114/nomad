const age = parseInt(prompt("How old are you?"));

if(isNaN(age) || age < 0 ){
  console.log("please wrie a number");
} else if(age < 18 ){
  console.log("You are too young.");
} else if(age >=18 && age <= 50){
  console.log("GAZZZA");
   }
   else if(age ==100){
  console.log("GAZZZA");
  
} else{
  console.log("you can't drink");
}
