//input string and switch first character with second character
var string = prompt("Input a pharase");
var array = string.split('');
var result = array.slice(0, 2)
    .reverse()
    .concat(array.slice(2))
    .join('');
console.log(result);
