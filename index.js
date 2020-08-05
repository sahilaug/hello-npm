const init = () => {
    const fs = require('fs');
    const download = require('download');

    (async () => {
        await download('https://github.com/qontract/qontract/releases/download/0.13.1/qontract.jar', 'qontract/lib');
    })();
}

init();


const startQontractStubServer = () => {
    const execSh = require('exec-sh');
    const path = require('path');

    const jarPath = path.resolve('qontract/lib/qontract.jar');
    const contractsPath = path.resolve('qontract/contracts/*.qontract');

    execSh(
        `java -jar ${jarPath} stub ${contractsPath}`,
        { cwd: 'qontract' },
        err => {
          if (err) {
            console.log('Exit code: ', err.code);
          }
        }
      );
}

exports.startQontractStubServer = startQontractStubServer;
