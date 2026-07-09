const fs = require('fs');
const fileName = `${Date.now()}.txt`;

function tryThis(){
    let availableData = "";
    for(let i = 0; i <= 1000; i++){
        availableData = availableData + `Some sketchy vibes ${i}\n `
    }
    return availableData;
}

function testAppendFile(){
    const cb = (error) => {
        if(error){
            console.log('Creating file failed');
            console.log(error);
        }
    }
    fs.appendFile(fileName, tryThis(), cb);
}
testAppendFile();