const fs = require('fs');
const path = require('path');

const modulesDir = path.join(__dirname, 'Modules');

fs.readdir(modulesDir, (err, files) => {
    if (err) {
        console.error('Error reading the Modules directory:', err);
        return;
    }

    files.filter(file => file.endsWith('.js')).forEach(file => {
        const modulePath = path.join(modulesDir, file);
        console.log(`Loading module: ${file}`);
        require(modulePath)();
    });
});
