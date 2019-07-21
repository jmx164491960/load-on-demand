const fs = require('fs');
const path = require('path');
console.log('fs:', fs);
const getPath = function() {
    const entryDir = path.resolve(__dirname, '../packages');
    const dirs = fs.readdirSync(entryDir);
    console.log('dirs:', dirs, entryDir);
    return {
        index: entryDir
    }
}

module.exports = getPath;