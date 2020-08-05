module.exports = () => {
    const fs = require('fs');
    const download = require('download');
    console.log("qontract jar download starting")
    
    (async () => {
        await download('https://github.com/qontract/qontract/releases/download/0.13.1/qontract.jar', 'dist');
        console.log("qontract jar download complete")
    })();

}
