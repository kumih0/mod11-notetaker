//importing 
const fs = require('fs');
const util = require('util');
const { v4: uuidv4 } = require('uuid');
// Promise version of fs.readFile/writefile to make them async
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Store {
  //read method
  read() {
    return readFile('db/db.json', 'utf-8');
  };
  //write method
  write(note) {
    return writeFile('db/db.json', JSON.stringify(note), (err) => err ? console.log(err) : console.info(`Note written to db.json`));
  };

  //add note method that contains get notes method
  addNote = async (note) => {
    //destructuring note obj
    const { title, text } = note;
    const newNote = {
      title,
      text,
      note_id: uuidv4(),//<-calling the uuid npm boi to run when that new note obj is made
    }
    //get notes as array of saved notes
    const savedNotes = JSON.parse(await this.read());
    //push new note into array, stringfy the new array and put it back w write method
    savedNotes.push(newNote);
    this.write(savedNotes);
    //return new saved notes array 
    return savedNotes;
  };

  //delete note method
  deleteNote = async (note_id) => {
    //grabbing the array of notes
    const savedNotes = JSON.parse(await this.read());
    //looping through the array
    savedNotes.forEach((note, index) => {
      //if the note id matches the id from the req params, splice it out of the array
      if (note.note_id === note_id) {
        savedNotes.splice(index, 1);
      }
    });
    //write the new array to the db.json file
    this.write(savedNotes);
    //return the new array
    return savedNotes;
  }

}

module.exports = Store;
