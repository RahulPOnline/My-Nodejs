const path = require('path')

console.log("Directory Name:", path.dirname(__dirname));

console.log("File Name:", path.basename(__filename));

console.log("File Extension:", path.extname(__filename));

// const joinPath = path.join("/user",'documents', 'node','projects')
// console.log("Joined path", joinPath);

// const resolvePath = path.resolve("user",'documents', 'node','projects')
// console.log("Resolve path", resolvePath);

