/* Given an array of strictly the characters of R, G & B. Segregate the value of 
array so that all R comes first, the G comes second and B comes last. You can only
 swap the elements of the array.
 for example, Given the array ['G','B','R','R','B','R','G'], it should become 
 ['R','R','R','G','G','B','B'] */

 const stringSequence = (str) =>{
     let str1 = str;
     str1.sort().reverse();
     console.log(str1);
 }

 stringSequence(['G','B','R','R','B','R','G'])