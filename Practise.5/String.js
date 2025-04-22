//String: In JavaScript, a string is a sequence of characters used to represent text. Strings are one of the primitive data types.

const st1 = "Adarsh"
const st2 = "vishwakarma"
const st3 = "D.T.S.S College"
const st4 = "HTML,CSS,JS,REACT,MERN STACK"
const st5 = "Problem SOlving , Contribute Team Work"  
const st6 = "   Hope Brohh "


console.log(`My Name is ${st1} ${st2}. I am Currently Graducate BSC.IT From ${st3} My Tecnical Skills is ${st4} and my soft Skills is ${st5} `);

console.log(`1. ${st1}:`,"The charAt Method is:",st1.charAt(3));
console.log(`2. ${st3}:`,"The indexof Method is:",st3.indexOf("T"));
console.log(`3. ${st4}:`,"The subString Method is:",st4.substring(0,8));
console.log(`4. ${st4}:`,"The ToLowercase Method is:",st4.toLowerCase());
console.log(`5. ${st4}:`,"The UpperCase Method is:",st4.toUpperCase());
console.log(`6. ${st1}:`,"The Slice Method is:",st1.slice(-5,3));
console.log(`7. ${st2}:`,"The Slice Method is:",st2.slice(-10,4));
console.log(`8. ${st6}:`,"The Trim Method is:",st6.trim());
console.log(`9. ${st5}:`,"The Length Method is:",st5.length);
console.log(`9. ${st3}:`,"The Split method is:",st3.split("-"));
console.log(`10. ${st4}:`,"The Split method is:",st4.split("-"));



const newst1 = "  Trim Method"
console.log(newst1);
console.log(`${newst1}:`,"The Trim Method is:",newst1.trim());
console.log(`${newst1}:`,"The Length Method is:",newst1.length);


const replaceMethod = "My Name is Lakhan"
console.log(`${replaceMethod}:`,"The Replace Method are:",replaceMethod.replace("Lakhan","Adarsh"));






