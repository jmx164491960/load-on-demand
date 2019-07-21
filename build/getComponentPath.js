const fs = require('fs');
const path = require('path');

function hasIndexJs(dir) {
    let dirs = [];
    try {
        dirs = fs.readdirSync(dir);
    } catch(e) {
        dirs = null;
    }
    // console.log('dirs:', dirs);
    return dirs && dirs.includes('index.js');
}

const getPath = function() {
    const entryDir = path.resolve(__dirname, '../packages');
    let dirs = fs.readdirSync(entryDir);
    
    const result = {
        index: entryDir
    };
    dirs = dirs.filter(dir => {
        return hasIndexJs(path.resolve(entryDir, dir));
    }).forEach(dir => {
        result[dir] = path.resolve(entryDir, dir); 
    });
    console.log('result:', result);
    return result;
}

module.exports = getPath;