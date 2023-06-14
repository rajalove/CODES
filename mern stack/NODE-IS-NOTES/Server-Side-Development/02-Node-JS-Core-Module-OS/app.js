const os=require('os');

//total memory

let totalMemory = os.totalmem();
console.log(`my pc totoal Memory: ${totalMemory}`)


//free memory

let freeMemory = os.freemem();
console.log(`my pc free Memory: ${freeMemory}`)


//free memory

let osName = os.hostname();
console.log(`my pc os Name: ${osName}`)

//home dir

let homeDirectory = os.homedir();
console.log(`home directory: ${homeDirectory}`)

// ________________________________________________________________________________________or

/*const killer=require('os');

//total memory................

let totalMemory = killer.totalmem();
console.log(`my pc totoal Memory: ${totalMemory}`)


//free memory............

let freeMemory = killer.freemem();
console.log(`my pc free Memory: ${freeMemory}`)


//free memory............................

let osName = killer.hostname();
console.log(`my pc os Name: ${osName}`)

//home dir............

let homeDirectory = killer.homedir();
console.log(`home directory: ${homeDirectory}`);*/