var str = "abc";

function reverseString(string) {
    var resStr="";
    for (var i = string.length-1; i >= 0; i--) {
         resStr+=string[i];
    }
    return resStr;
}

function reverseStringMethods(string){
    return string.split("").reverse().join("");
}

function reverseRecurtion(string){
    if(string==="")
        return "";
    else{
    return reverseRecurtion(string.substr(1)) + string.charAt(0);
    }
}

console.log(reverseString(str));
console.log(reverseStringMethods(str));
console.log(reverseRecurtion(str));
