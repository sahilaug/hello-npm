const fs = require('fs');
const download = require('download');

(async () => {
    await download('https://github.com/qontract/qontract/releases/download/0.13.1/qontract.jar', 'dist');
})();
