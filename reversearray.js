//input array of n-lenght and return input array and reversed array
var inputarray = [];
var lenght = 10;
for (var a = 0; a < lenght; a++) {
    inputarray[a] = prompt('Input the element number ' + (a + 1) + ' of the array');
}
console.log(inputarray);
reversed = inputarray.reverse();
console.log(reversed);
