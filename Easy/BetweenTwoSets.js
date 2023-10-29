function getTotalX(a, b) {
    // Write your code here
   let counter = 0;
   let isFactor = false;
  
   let joined = a.concat(b);
   

   
   for(let i=a[1];i<b[0];i++){
       isFactor = false;
       for(let j=0;j<joined.length;j++){
           if(joined[j] % i===0){
               isFactor = true;
           }else if(i%joined[j]===0){
               isFactor = true;
           }else{
               isFactor = false;
           }
           
       }
       if(isFactor === true){
           counter += 1;
           isFactor = false;
       }
   }

    return counter;    
}
