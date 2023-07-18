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
    console.log(newNote);
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
    const savedNotes = await this.getNotes();
    //filtering out the note that matches the note_id that was passed in
    const updatedNotes = savedNotes.filter((note) => note.note_id !== note_id);
    //writing the updated array to the db.json file
    this.write(updatedNotes);

    return updatedNotes;
  }

}

module.exports = Store;
