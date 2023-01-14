
module.exports = function toReadable (number) {
    const numToStr = number.toString();
    const numToStrSplit = numToStr.split('');

    const firstNumberObj = {
        0:  'zero',
        1:  'one' ,
        2:  'two',
        3:  'three',
        4:  'four',
        5:  'five',
        6:  'six',
        7:  'seven',
        8:  'eight',
        9:  'nine'
    };

    const secondNumberObj = {
        0:  'ten',
        1:  'eleven',
        2:  'twelve',
        3:  'thirteen',
        4:  'fourteen',
        5:  'fifteen',
        6:  'sixteen',
        7:  'seventeen',
        8:  'eighteen',
        9:  'nineteen',
    };

    const thirdNumberObj = {
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety',
    };

    if (numToStr.length == 1) {
        return firstNumberObj[number];
    } else if (numToStr.length == 2 && number < 20) {
        return `${secondNumberObj[numToStr[1]]}`;
    } else if (numToStr.length == 2 && number >= 20 && numToStr.endsWith('0')) {
        return `${thirdNumberObj[numToStr[0]]}`;
    } else if (numToStr.length == 2 && number >= 20) {
        return `${thirdNumberObj[numToStr[0]]} ${firstNumberObj[numToStr[1]]}`;
    } else if (numToStr.length == 3 && numToStr[1] == 0 && numToStr.endsWith('0')) {
        return `${firstNumberObj[numToStr[0]]} hundred`;
    } else if (numToStr.length == 3 && numToStr[1] == 0){
        return `${firstNumberObj[numToStr[0]]} hundred ${firstNumberObj[numToStr[2]]}`;
    } else if (numToStr.length == 3 && +numToStr.substring(1, 3) < 20) {
        return `${firstNumberObj[numToStr[0]]} hundred ${secondNumberObj[numToStr[2]]}`;
    } else if (numToStr.length == 3 && numToStr.endsWith('0') && +numToStr.substring(1, 3) >= 20) {
        return `${firstNumberObj[numToStr[0]]} hundred ${thirdNumberObj[numToStr[1]]}`;
    } else {
        return `${firstNumberObj[numToStr[0]]} hundred ${thirdNumberObj[numToStr[1]]} ${firstNumberObj[numToStr[2]]}`;
    }
};

