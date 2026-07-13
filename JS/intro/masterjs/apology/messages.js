const fs = require('fs');
const path = require('path');
let data = require('./data.json');
let xFile = [];

const targetGenders = ['Female'];
// Use ['Female', 'Male'] for multiple genders.
// Use 'all' to include every record.

function getTitle(gender) {
    if (gender === 'Female') {
        return 'Madam';
    }

    if (gender === 'Male') {
        return 'Sir';
    }

    return 'Dear';
}

for (let i = 0; i < data.length; i++) {
    const dataPoint = data[i];

    if (targetGenders !== 'all' && !targetGenders.includes(dataPoint.gender)) {
        continue;
    }

    const person = getTitle(dataPoint.gender);
    const message = `Dear ${person}, ${dataPoint.first_name} ${dataPoint.last_name}. We regret to inform you that you'll not proceed in the next stage of the interview.`;

    xFile.push({
        first_name: dataPoint.first_name,
        last_name: dataPoint.last_name,
        email: dataPoint.email,
        gender: dataPoint.gender,
        phone: dataPoint.phone,
        message
    });
}

console.log(xFile);
const xFileText = JSON.stringify(xFile, null, 1);
const outputPath = path.join(__dirname, 'xFile.json');

fs.writeFile(outputPath, xFileText, (error) => {
    if (error) {
        console.error(error);
    }
});

console.log(`Saved ${xFile.length} entries to ${outputPath}`);


