// fs stands for file  system
const fs = require('fs');

// can write to/edit files
const textIn = `Hello World \n\nits text file generated in nodeJS \n\ncreated on ${Date.now()}`;
fs.writeFileSync('./txt/input.txt', textIn);

// can read files directly in node
const textOut = fs.readFileSync('./txt/input.txt', 'utf-8');
