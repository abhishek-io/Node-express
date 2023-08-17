const { readFile, writeFile } = require('fs')

readFile('./New/txt1', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
    const txt1 = result
    readFile('./New/txt2', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        const txt2 = result
        writeFile('./New/result-async', `the async result is : ${txt1}${txt2}`, () => {
            if (err) {
                console.log(err);
                return;
            }

        })
    })
})