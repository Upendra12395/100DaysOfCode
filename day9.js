/* Given a string, find the longest palidromic contiguous substring. if there are more
than one with the maximum length, return any one.
For example, the longest palidromic of "aabcdcb" is "bcdcb". The longest palidromic
substring of "bananas" is "anana"*/

const findPalidromicSubstring = (string) =>{
    let finalString = "";
    var array = getAllSubstrings(string);
    for(let i=0;i<array.length;i++){
        if(array[i].length > 2){
            let x = checkPalindrome(array[i]);
            if(x){
                if(finalString.length < array[i].length){
                    finalString = array[i];
                }
            }
        }
    }
    console.log(finalString)
}

function checkPalindrome(string1){
    let newString = "";
    for (let i = string1.length - 1; i >= 0; i--) {
        newString += string1[i];
    }
    if(newString == string1){
        return true;
    }else{
        return false;
    }
}

function getAllSubstrings(str) {
    var i, j, result = [];
  
    for (i = 0; i < str.length; i++) {
        for (j = i + 1; j < str.length + 1; j++) {
            result.push(str.slice(i, j));
        }
    }
    return result;
  }

findPalidromicSubstring("aabcdcb")