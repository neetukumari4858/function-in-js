function perfect(num1){
    var sum=0
    for (var i=0; i<num1;i++){
        if (num1%i===0){
            sum=sum+i
        }
    }
    if (sum===num1){
        console.log("perfect number")
    }
    else{
        console.log("not perfect number")
    }
    
}
perfect(6)