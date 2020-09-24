// Question 1 solution


let array = [1, 2, 6, 9,10,11,13,14];
for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        console.log("these are even numbers" + array[i])
    }
    else 
    console.log("not a even no.");
}

// End Here

//  Question 2 solution


 var find= function(array) {
   let maxCount = 0;
   let current = 0;
   for (let i = 0; i<array.length; i++) {
      
       array[i] === 0 ? current = 0 : current++;
       if (current > maxCount)
       { maxCount = current;
   }
};
   return maxCount;
};
let array=[0,0,1,0,0,0,1,1,1,1,1,1];
let result =find(array);
console.log("max consecutives 1s are=" +result);

// End here




//  Question 3 solution

function repeatNum(arr) 
{ 
    console.log(arr.length);
 
  console.log(" Repeating elements are ")
  for(let i = 0; i < arr.length; i++) {
  
    for(let j = i+1; j < arr.length; j++) {
      if(arr[i] == arr[j]){ 
        console.log("repeated number"+ arr[i]); }
  }}
}      
  let val=[1,2,3,4,5,5,6,7,8,9,10];
 let result=repeatNum(val);


// End here




//  Question 4 solution


function formValid()
{
    let x=document.forms["form"]["firstname"].value;
   
    if(x== "")
    {
        alert("please fill name ");

    return false;
    }

    let y=document.getElementById("check").checked
   if( y==false)
    {
        alert("please check the box");

    return false;
    }

}

// End here




//  Question 5 solution
function myFunction() {
    var element = document.getElementById("myDIV");
    element.classList.add("mystyle");
  }
  //end here

//   question 8 solution
var obj = {
    "id" : 4, "name" : "abc",
    "id" : 10, "name" : "ab2",
    "id" : 5, "name" : "abc3",
    "id" : 6, "name" : "abc5"
   }
   
var value=[];
for(var array in obj){
    value.push([array,obj[array]]);
    
}
value.sort(function(a, b) {
    if (a.id !== b.id) {
        return a.id - b.id
    }
});
// this is wrong format...

// end here