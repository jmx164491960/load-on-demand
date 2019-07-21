const fs = require('fs');
const path = require('path');

/**
 * 判断刚路径是否含有index.js
 * @param {String} dir 
 */
function hasIndexJs(dir) {
    let dirs = [];
    try {
        dirs = fs.readdirSync(dir);
    } catch(e) {
        dirs = null;
    }
    return dirs && dirs.includes('index.js');
}

/**
 * 获取指定入口和入口下包含index.js的文件夹的路径
 * @param {String} entryDir 
 */
const getPath = function(entryDir) {
    let dirs = fs.readdirSync(entryDir);
    
    const result = {
        index: entryDir
    };
    dirs = dirs.filter(dir => {
        return hasIndexJs(path.resolve(entryDir, dir));
    }).forEach(dir => {
        result[dir] = path.resolve(entryDir, dir); 
    });
    return result;
}

module.exports = getPath;