const os = require('os')

// current user details
const user = os.userInfo()
console.log(user)

//system running details
console.log(`system is running from ${os.uptime} seconds`)
const CurrentOS = {
    name:os.type(),
    release:os.release(),
    freeMem:os.freemem()/1000/1000,
    usedMem:os.totalmem()/1000/1000

}
console.log(CurrentOS)