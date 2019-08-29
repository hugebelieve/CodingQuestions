// NodeJS? ---------------------------------------------
// It is a event-driver, non-blocking I/O toolkit built on top of V8 engine
// and used for building server-side applications

// Why NodeJS? ---------------------------------------------
// Its ability to do task asynchronously so it doesn't wait until result of one request
//      it moves to next and that makes it really fast
// NPM excellent package manager and it is faster than other
// Reading file in async is great as compared to any other platform
// Fast as it uses V8
// Open source
// Highly Scalable because of its event-driven mechanism

// Why V8 Engine? ---------------------------------------------
// Convert JS code into native machine code

// Type of API function in NodeJS ---------------------------------------------
// 1. Non-Blocking function
require('fs').readFile("path", (error, data)=>{  });
// 2. Blocking function
let data = require('fs').readFileSync("path");

// Event Driven? ---------------------------------------------
// NodeJS file can have a function or task that need to be executes on certain event
// Event can be someone trying to access a port on server

// Scale NodeJS ---------------------------------------------
// 1. Cloning using Cluster module
// 2. Decomposing the application in smaller micro-services (Elastic Load Balancer)

// Stream ---------------------------------------------
// Chunk of data that may not available at once as does fit in memory.
// Readable - file system
// Writable - file system
// Transform - map stream like for creation of zip
// Duplex - both read and write : socket

// Event Loop ---------------------------------------------
// NodeJS is single threaded supports concurrency with events and callbacks
// Event loop checks "Event Que"(not stack) and push to "Execution stack"

// Error - First callback
require('fs').readFile("path", (error, data)=>{  });
// when first argument is error

// Libuv ---------------------------------------------
// Multi function support library focus on asynchronous I/O

// REPL - read evaluate print loop ---------------------------------------------
// It is quick way to run and test nodejs
// You can use terminal to continuous use

// Globals in NodeJS ---------------------------------------------
// process, require(), module, __dirname, __filename

// Memory problem in Node.JS ---------------------------------------------
// node --max-old-space-size=8192 server.js

// Debug NodeJS ---------------------------------------------
// node --inspect-brk=9229 server.js

// Disadvantage
// Single Thread
// Lack of Maturity

// Threat in NodeJS ---------------------------------------------
// Snyk is security scanning platform
// SQL injection
// Cross-site attacks
// DOS attack - limit concurrent request
// Encrypt secrets files
// HTTP request header for extra security
// JWT token using Passport.js
// Avoid JS eval
// Hide Error details from client map them

// ORM (object Relation Mapping) in MySQL
// ODM (Object Document Mapping) in Mongo - mongoose

// Local strategies with Passport.JS