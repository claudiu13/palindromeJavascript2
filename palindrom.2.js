const palindrome = function(x) {
    let xLength = x.length;
    if (xLength === 0 || xLength === 1) {
        return true;
    }    
    if (x[0] === x[xLength - 1]) {
        return palindrome(x.slice(1, xLength - 1));
    }    
    return false;
};

console.log(palindrome('rotitor'));