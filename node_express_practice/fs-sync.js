const {readFileSync,writeFileSync} = require('fs')

const txtfile1 = readFileSync('./New/txt1','utf8')
const txtfile2 = readFileSync('./New/txt2','utf8')
const txtfile3 = readFileSync('./New/NewInsideNew/FileInsideNew','utf8')

console.log(' -'+txtfile1+'\n -'+txtfile2+'\n -'+txtfile3)


writeFileSync('./New/Result.txt',`This is result file created by writeFileSync method of 'fs' module \n concatinating prev 2 files${txtfile1},${txtfile2}`,{flag:'a'})