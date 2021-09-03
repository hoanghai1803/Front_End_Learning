function rot13(str) {
    let str_ret = ""; 
    for (let i = 0; i < str.length; i++) {
        if (str[i] < 'A' || str[i] > 'Z') {
            str_ret += str[i];
            continue;
        }
        let num = str[i].charCodeAt(0);
        if (str[i] <= 'M')
        str_ret += String.fromCharCode(num + 13);
        else 
            str_ret += String.fromCharCode(num - 13);
    }
    return str_ret;
}