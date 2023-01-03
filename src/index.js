module.exports = function reverse (n) {
    n = Math.abs(n)
    char_array = n.toString(10).split('')
    reversed_string = char_array.reverse().join('')
    return +reversed_string
}
