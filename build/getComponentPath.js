const fs = require('fs');
const path = require('path');
const getPath = function() {
    const entryDir = path.resolve(__dirname, '../packages');
    const dirs = readdirSnyc(entryDir);
    console.log('dirs:', dirs, entryDir);
}

module.exports = getPath;