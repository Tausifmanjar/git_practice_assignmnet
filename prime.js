let num = 56;

let count = 0
for (let i = 0; i <= num; i++){
    if(num % i == 1){
        count++
    }
}
if(count==2){
    console.log("prime")
}else{
   console.log("not prime")
}

