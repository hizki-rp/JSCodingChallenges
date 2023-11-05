function birthday(s, d, m) {
    // Write your code here
    let result = 0;
    let matchCount = 0;

    for(let i=0;i<s.length;i++){
       for(let j=i;j<i+m;j++){
           result += s[j]; 
       }
       if(result === d){
           matchCount += 1;
       }
       result = 0;
    }
    return matchCount;  
}
