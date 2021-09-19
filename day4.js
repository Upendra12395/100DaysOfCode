/* Given a string of square, curly and round, open and closing brackets
return whether brackets are balanced
for example the string ([]){}({}) return true
and string ([){(} retuen false*/
    
const checkBalanced = (str) =>{
    let str1 = str;
    let stack = [];
    for (let i =0; i<str1.length; i++){
        if (str1[i] == '(' || str1[i] == '{' || str1[i] == '['){
            stack.push(str1[i]);
        }else if (stack[(stack.length-1)] == '(' && str1[i] == ')') {
            stack.pop();
        } else if (stack[(stack.length-1)] == '{' && str1[i] == '}') {
            stack.pop();
        }else if (stack[(stack.length-1)] == '[' && str1[i] == ']') {
            stack.pop();
        }
    }
    if(stack.length == 0){
        console.log('true');
    }else{
        console.log('false');
    }
}

checkBalanced("([]){}({})");