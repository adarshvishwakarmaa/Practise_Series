const student = [
    { "name": "Adarsh Sharma", "rollNo": 101, "age": 20, "department": "Computer Science" },

    { "name": "Riya Patel", "rollNo": 102, "age": 21, "department": "Information Technology" },

    { "name": "Aman Verma", "rollNo": 103, "age": 22, "department": "Mechanical Engineering" },

    { "name": "Sneha Singh", "rollNo": 104, "age": 19, "department": "Electronics" },
    { "name": "Raj Mehta", "rollNo": 105, "age": 20, "department": "Civil Engineering" },

    { "name": "Neha Yadav", "rollNo": 106, "age": 21, "department": "Computer Science" },

    { "name": "Vikram Joshi", "rollNo": 107, "age": 23, "department": "Information Technology" },

    { "name": "Priya Desai", "rollNo": 108, "age": 22, "department": "Electronics" },

    { "name": "Arjun Singh", "rollNo": 109, "age": 20, "department": "Mechanical Engineering" },

    { "name": "Kavita Sahu", "rollNo": 110, "age": 21, "department": "Civil Engineering" },

    { "name": "Deepak Kumar", "rollNo": 111, "age": 19, "department": "Computer Science" },
    { "name": "Nisha Jain", "rollNo": 112, "age": 20, "department": "Electronics" },

    { "name": "Rohan Thakur", "rollNo": 113, "age": 22, "department": "Information Technology" },

    { "name": "Meera Rao", "rollNo": 114, "age": 20, "department": "Mechanical Engineering" },

    { "name": "Yash Garg", "rollNo": 115, "age": 21, "department": "Civil Engineering" },

    { "name": "Isha Kaur", "rollNo": 116, "age": 19, "department": "Computer Science" },

    { "name": "Tushar Malik", "rollNo": 117, "age": 23, "department": "Information Technology" },

    { "name": "Divya Nair", "rollNo": 118, "age": 20, "department": "Electronics" },

    { "name": "Karan Patel", "rollNo": 119, "age": 21, "department": "Mechanical Engineering" },

    { "name": "Sakshi Dubey", "rollNo": 120, "age": 22, "department": "Civil Engineering" }
]

// const filter =student.filter ((e)=>student.includes(e));
// console.log("The Student is:",filter);

// const age =student.filter ((e)=> e.age ===20);
// console.log("The value is:",age);


// const department = student.filter((e)=>e.department=="Information Technology")
// console.log("The value is:",department);

// const department = student.filter((e)=>e.department=="Computer Science")
//  console.log("The value is:",department);

// const Age = student.filter((e)=>{
//   return  e.age>=20;
// })
// console.log(Age);


const Age = student.filter((e)=>{
  return  e.age<=19;
})
console.log(Age);


