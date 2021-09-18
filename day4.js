/* Given a string of square, curly and round, open and closing brackets
return whether brackets are balanced
for example the string ([]){}({}) return true
and string ([){(} retuen false*/
    
const checkBalanced = (str) =>{
    let str1 = str;
    let array1 = [];
    for (let i =0; i<str1.length; i++){
        if (str1[i] == '(' || str1[i] == '{' || str1[i] == '['){
            array1.push(str1[i]);
        }else if (array1[(array1.length-1)] == '(' && str1[i] == ')') {
            array1.pop();
        } else if (array1[(array1.length-1)] == '{' && str1[i] == '}') {
            array1.pop();
        }else if (array1[(array1.length-1)] == '[' && str1[i] == ']') {
            array1.pop();
        }
    }
    if(array1.length == 0){
        console.log('true');
    }else{
        console.log('false');
    }
}

checkBalanced("([]){}({(}))");