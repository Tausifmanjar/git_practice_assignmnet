let str = "naman"

let bag = ""
for(let i = str.length-1; i >= 0; i--){
   bag=bag+ str[i]
}
if(str === bag) {
    console.log("pallindrome")
} else {
    console.log("not pallindrom")
}