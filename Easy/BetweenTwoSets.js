
function getTotalX(a, b) {
    // Write your code here
    let arr = [];
    let l1 = a.length;
    let l2 = b.length;
    let counter = 0;
    
    for(let i=0;i<l1;i++){
        arr[i] = a[i];
    }
    
    for(let i=l1;i<l1+l2;i++){
        arr[i] = b[i-l1];
    }
    
    for(let i=0;i<arr.length;i++){
        if((arr[i]%a[1]===0) && (arr[i]%a[2]===0) )
    }
    
    console.log(arr);

    let counter =0 ;
    
    
    
}