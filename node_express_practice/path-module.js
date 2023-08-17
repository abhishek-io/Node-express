const path = require('path')
console.log(path.sep)

const FilePath = path.join('NEw','NewInsideNEw','FileInsideNew')
console.log(FilePath)

const base = path.basename(FilePath)
console.log(base)

const absolute  = path.resolve(__dirname,'New','NewInsideNew','FileInsideNew')
console.log(absolute)