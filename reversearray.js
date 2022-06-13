//input array of n-lenght and return input array and reversed array
var inputarray = [];
var lenght = 10;
for (var a = 0; a < lenght; a++) {
    inputarray[a] = prompt('Introduce el elemento número ' + (a + 1) + ' del array');
}
console.log(inputarray);
reversed = inputarray.reverse();
console.log(reversed);
