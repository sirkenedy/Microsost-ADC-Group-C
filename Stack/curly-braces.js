function validBraces(brace = "{}{}{}{}()") {
    let res = brace.split('').reduce((acc, element) => {
        if(element === "{" || element === "[" || element==="(") {
            return acc+1;
        } 
        return acc-1;
    },0);
    if(res === 0) return true;
    return false;
}

console.log(validBraces());