function getTotalX(a, b) {
    // Write your code here
   let halfFactor1 = false;
   let halfFactor2 = false;
   let nCount = 0;
   let fCount = 0;
   
   let init = a[a.length -1];
   let final = b[0];
   
for(let i=init;i<=final;i++){
       //check for the first array
       for(let j=0;j<a.length;j++){
          if(i%a[j] === 0){
              nCount+=1; 
          }
       }
       if(nCount === a.length){
           halfFactor1 = true;
       }else{
           halfFactor1 = false;
       } 
          nCount = 0;
       //check for the second array
       for(let k=0;k<b.length;k++){
          if(b[k]%i === 0){
              nCount +=1; 
          } 
       }
       if(nCount === b.length){
               halfFactor2 = true;
       }else{
           halfFactor2 = false;
       }
       
       nCount = 0;
        
       if(halfFactor1 === true && halfFactor2 === true){
           fCount +=1;
           halfFactor2 = false;
           halfFactor1 = false;
       }
       
}    

    return fCount;    
}
