module.exports = function reverse (n) {
    if (n < 0) n = n * (-1);
    let str = String(n);
    let i = str.length - 1;
    let res = '';
    while (0 <= i){
      res = `${res}${str[i]}`;
      i = i - 1;
    }
    return Number(res);
}
