function checknum(){
	
  const result= document.getElementById("results-div");
  const input= document.getElementById("user-input");
  result.innerHTML= input.value;
  
  if (input.value== ""){
    alert("Please provide a phone number");
  }
  else{
  result.innerHTML= checkvalid(input.value);
  }

}

function clearbtn(){
  let input= document.getElementById("results-div");
  input.innerHTML="";
}

function checkvalid(num){
   let cleanednum = num.replace(/[a-zA-Z)()-]/g,"").split(" ").join("");
   let index=-1;
   if (num[0] =='-'){
     console.log(1);
     return 'Invalid US number: ' + num;
   }
  
   if (cleanednum.length != 11 && cleanednum.length !=10){
     console.log(2);
     return 'Invalid US number: ' + num;
   }
   
   if (cleanednum.length == 11 && cleanednum[0]!= '1'){
     console.log(3);
      return 'Invalid US number: ' + num;
     }
  if (num.includes('(')){
     index= num.indexOf('(');
     if (num[index+4] !== ')'){
       return 'Invalid US number: ' + num;
     }
     
  }


  else if (num.includes(')')){
    console.log(5);
    return 'Invalid US number: ' + num;
  }
  
  let hyph = num.replace(/[()]/g,"").split(" ").join("").split('-');
  for (let i=1; i < hyph.length-1;++i){
    if (hyph[i].length != 3 && hyph[i].length != 4 ){
      console.log(hyph[i]);
      return 'Invalid US number: ' + num;

    }
  }

  
 
  return 'Valid US number: ' + num;
  
}