function palindrome(str) {
    str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    for (let i = 0; i < str.length / 2; i++)
        if (str[i] !== str[str.length - i - 1])
        return false;
    return true;
}