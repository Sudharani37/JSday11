const numbers = [1, 2, 3, 4, 5];
// 1)named function
function named(element){
      console.log(element*2)
}
numbers.forEach(named)
// 1)anonymous function
numbers.forEach(function(element){
          console.log(element*2)
})
// 1)arrow function
numbers.forEach((element)=>console.log(element*2))

const numbers2 = [4, 10, 15, 6, 25, 8];
// 2)named function
function less(element){
          if(element>=10){
            console.log(element)
          }
}
numbers2.filter(less)
// 2)anonympus function
numbers2.filter(function(element){
    if(element>=10){
        console.log(element)
    }
})
// 2)arrow function
numbers2.filter((element)=>{
    if(element>=10){
        console.log(element)
    }
})
const words = ['apple', 'banana', 'grape'];
// 3)named function
function upper(element){return element.toUpperCase()
}
console.log(words.map(upper))
// 3) anonymous function
console.log(words.map(function(element){
         return element.toUpperCase()}))
// 3)arrow function
console.log(words.map((element)=>{
    return element.toUpperCase()}))
 	const number = [4, 10, 15, 6, 25, 8];
// 4) named function
    function filchain(element){
          if(element>=10){
            return element>=10
          }
    }
    function mapchain(element){
        return element*element
    }
    result1=number.filter(filchain)
    console.log(result2=result1.map(mapchain))
  //  4)anonymous function
  let res=number.filter(function(element){
    return element>=10
  })
  console.log(res.map(function(element){
    return element*element
  }))
  // 4)arrow function
  let res1=number.filter((element)=>{
    return element>=10
  })
  console.log(res1.map((element)=>{
    return element*element
  }))
//   5.	Using forEach and filter with Objects: Given an array of student objects 
// with name and marks properties, write a function that filters students with 
// marks greater than 50 and logs their names using forEach.
  const students = [
{ name: 'John', marks: 45 },
{ name: 'Jane', marks: 72 },
{ name: 'Bob', marks: 38 },
{ name: 'Alice', marks: 85 }
];
// 5)named function
function filterr(elements,index){
     return students[index]["marks"]>50
}
function forE(elements,index){
    console.log(res[index]["name"])
}
res=students.filter(filterr)
res.forEach(forE)
//5)anonymous function
let resul=students.filter(function(elements,index){
   return students[index]["marks"]>50
})
resul.forEach(function(elements,index){
    console.log(resul[index]["name"])
    })
//5)arrow function
let result=students.filter((elements,index)=>{
    return students[index]["marks"]>50
 })
 result.forEach((elements,index)=>{
     console.log(resul[index]["name"])
     })

