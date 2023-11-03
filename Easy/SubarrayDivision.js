function birthday(s, d, m) {
    // Write your code here
    let matchCount = 0;
    for(let i=0;i<s.length;i++){
        for(let j=1;j<s.length;j++){
           if(i+j===d){
               matchCount+=1;
           }
        }
    }
    
    return matchCount;
}