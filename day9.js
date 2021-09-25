/* Given a string, find the longest palidromic contiguous substring. if there are more
than one with the maximum length, return any one.
For example, the longest palidromic of "aabcdcb" is "bcdcb". The longest palidromic
substring of "bananas" is "anana"*/

const findPalidromicSubstring = (string) =>{
    let finalString = "", start = 1, str1;
    for (let i =0; i<string.length;i++){
        str1 = string.substring(start,i);
    
        console.log(str1)
        if(str1.length > 2){
            let x = checkPalindrome(str1);
            if(x){
                if(finalString.length < str1.length){
                    finalString = str1;
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

findPalidromicSubstring("bananas")