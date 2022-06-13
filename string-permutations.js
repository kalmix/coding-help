input = prompt('Input a string:');
const allPermutations = str => {
if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
return str
    .split('')
    .reduce(
        (acc, letter, i) =>
        acc.concat(allPermutations(str.slice(0, i) + str.slice(i + 1))
            .map(val => letter + val)),
        []
    );
};
arr = allPermutations(input);
check = prompt('Input a permutation:');
console.log(arr.includes(check));
console.log(allPermutations(input));
