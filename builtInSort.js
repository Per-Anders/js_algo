arr = [6,4,15,10];


function numCompare(n1, n2) {
    return n1-n2;
}


function compareByLen(str1, str2) {
    return str1.length - str2.length;
}



console.log(arr.sort(numCompare));
console.log(["ba","cbvb","a","dss"].sort(compareByLen))