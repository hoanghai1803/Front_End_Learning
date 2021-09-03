function convertToRoman(num) {
    let ones = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    let tens = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    let hundreds = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    let thousands = ['', 'M', 'MM', 'MMM', 'MMM'];
   
    return (thousands[Math.floor(num / 1000)] + hundreds[Math.floor(num / 100) % 10] 
           + tens[Math.floor(num / 10) % 10] + ones[num % 10]);
}
   