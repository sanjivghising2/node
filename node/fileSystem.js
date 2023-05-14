
 /*/{ common js method } const add = require( "./app");
import {add} from "./app.js";
console.log(add(1, 2));


console.log(import.meta.url)   */
// file system  ( read and write file using promis ebase)
// https://nodejs.org/dist/latest-v16.x/docs/api/fs.html#promise-example
/*
import * as fs from 'fs/promises';


// writefile  
await fs.writeFile("ram.txt", "hello");

//read file (await need for beacuse fs is promise based )
// error handle by using try{} catch{}  eg..
try{
let contents = await fs.readFile("ram.txt","utf-8");
console.log(contents);} catch(err){
    console.log(err);
}
console.log("exited")


//unlink (path,call ): delete the file
await fs.unlink("filename.txt");
// delete folder
await fs.rmdir("folder name");
 

//yarn add @types/node   { add node modules }*/