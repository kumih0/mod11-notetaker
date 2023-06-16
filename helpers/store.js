const { error } = require('console');
const fs = require('fs');
const util = require('util');
const { v4: uuidv4 } = require('uuid');
// uuidv4();

// Promise version of fs.readFile/writefile to make them async
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Store{
  read(){
    return readFile('db/db.json', 'utf-8');
  }
  write(note){
    return writeFile('db/db.json', JSON.stringify(note), (err) => err ? console.error(err) : console.info(`Note written to db.json`));
  }
  addNote(note){
    const { title, text } = note;
    const newNote = {
      title,
      text,
      note_id: uuidv4(),
    }
    //getnotes method> grabbing dbjson obj and push new note into array, stringfy the new array and put it back w writefile method
    const getNotes = () => {
      return JSON.parse(read());
    }
    return this.write(getNotes.push(newNote));
  }
  // deleteNote
}
// /**
//  *  Function to write data to the JSON file given a destination and some content
//  *  @param {string} destination The file you want to write to.
//  *  @param {object} content The content you want to write to the file.
//  *  @returns {void} Nothing
//  */
// const writeToFile = (destination, content) =>
//   fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
//     err ? console.error(err) : console.info(`\nData written to ${destination}`)
//   );
// /**
//  *  Function to read data from a given a file and append some content
//  *  @param {object} content The content you want to append to the file.
//  *  @param {string} file The path to the file you want to save to.
//  *  @returns {void} Nothing
//  */
// const readAndAppend = (content, file) => {
//   fs.readFile(file, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err);
//     } else {
//       const parsedData = JSON.parse(data);
//       parsedData.push(content);
//       writeToFile(file, parsedData);
//     }
//   });
// };

module.exports = { readFromFile, writeToFile, readAndAppend };
