
var num = "9899100101103104105";
var numSet = [0,1,2,3,4,5,6,7,8,9];
//create an empty array container for new missing numbers
var newNum = [];

function include () {
  //split string into an array of strings
  num.split('');
for (var i = 0; i<numSet.length; i++){
  //string.indexOf -1 to retrn values that never occur
    if(num.indexOf(numSet[i]) == -1){
    newNum.push(numSet[i]);
  } 
}
console.log(newNum);
return newNum;
}

include();


// //perhaps an intersection function may work???
// //iteratate numbers that don't intersect and push them into a new array
// function intersection(set1, set2){
//   var remaining = {}; 
//   var intersect  = [];
//  for (var i = 0; i<set2.length; i++){
//   remaining[set2[i]] = false;
//  } 
//  for (var j = 0; j<set1.length; j++){
//   if(remaining[set1[j]] = false) {
//     intersect.push(set1[j]);
//  }console.log(intersect);
//  return intersect;
//  }

// }