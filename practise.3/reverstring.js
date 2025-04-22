// function reverseString(input){
//     for(let i = input.length - 1 ;i>=0;i--){
//         console.log(input[i]); 
//     }
// }
// console.log(reverseString("Adarsh Vishwakarma"));


function reverse(string){
    let result = "";
    for(let i = string.length - 1 ; i>=0;i--){
        result = result + string[i]
    }
    return result;
}
console.log(reverse("Armend"));


function reverse(s){
    let result = ""
   for(let i=s.length-1;i>=0;i--){
      result = result + s[i];
   }
   return result;
}
console.log(reverse("Amsamdsdhsbbcbsd hscdc"));
