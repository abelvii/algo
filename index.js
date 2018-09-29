function kmp(str, target){
    if(str.length > target.length){
        return -1;
    } else if(str.length == target.length){
        return str == target? 0: -1;
    }
    let i = 0,
        j = 0,
        k = -1,
        sLen = str.length,
        tLen = target.length,
        next = [];
    next[0] = -1;
    while(j < sLen - 1){
        if((k == -1) || (str[j] == str[k])){
            j++;
            k++;
            if(str[j] != str[k]){
                next[j] = k;
            } else {
                next[j] = next[k];
            }
        } else {
            k = next[k];
        }
    }
    j = 0;
    while (i < tLen && j < sLen){
        if( j == -1 || target[i] == str[j]){
            i++;
            j++;
        } else {
            j = next[j];
        }
    }
    if(j == sLen)
        return i - j;
    else 
        return -1;
}

function sunday(str, target){
    let position = {};
}
let str = 'search',
    tar = 'substring searching algorithm';
let a = Date.now()
console.log(tar.indexOf(str));
let b = Date.now()
console.log(b-a)
