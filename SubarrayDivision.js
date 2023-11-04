function birthday(s, d, m) {
    // Write your code here
    let matchCount = 0;
    for(let i=0;i<s.length;i++){
        if(m===1 && s[0]===d){
           matchCount += 1;
           return matchCount;
        }
        for(let j=i+1;j<s.length;j++){
            
           if(m===2 && s[i]+s[j] === d){
               matchCount += 1;
           }
           if(m===3){
              for(let k=j+2;k<s.length;k++){
                  if(s[i]+s[j]+s[k] === d){
                      matchCount +=1;
                  }
                  return matchCount;
              }
           }
           
        }
        return matchCount;
    }
    
   
}