var replaceDigits = function(s) {
    function shift(c, x) {
        return String.fromCharCode(c.charCodeAt(0) + parseInt(x));
    }

    let chars = s.split('');
    
    for (let i = 1; i < s.length; i += 2) {
        chars[i] = shift(chars[i - 1], chars[i]);
    }
    
    return chars.join('');
};

const s = "a1c1e1";
console.log(replaceDigits(s)); // Output: "abcdef"
