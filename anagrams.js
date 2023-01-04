
str1 = "aab";
str2 = "aba";

function validAnagram(str1, str2) {
    
    const lookup = {};

    for(let i=0; i < str1.length; i++) {
        let letter = str1[i];
        // if letter exists, increment, else set to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }

    for (let i=0; i < str2.length; i++) {
        let letter = str2[i];
        // cant find letter or letter is zero, then ints not an anagram
        if(!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -=1
        }
    }
    
    return true;
}

console.log(validAnagram(str1,str2));