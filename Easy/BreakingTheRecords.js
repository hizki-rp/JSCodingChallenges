    // Write your code here
let highScore = scores[0];
    let lowScore = scores[0]
    
    let recordBreaks = [0, 0];
    
    
    
    for(let i=0;i<scores.length;i++){
        if(scores[i]>highScore){
            highScore = scores[i];
            recordBreaks[0] +=1;
        }
        if(scores[i]<lowScore){
            lowScore = scores[i];
            recordBreaks[1] +=1;
        }
    }
    
    return recordBreaks;