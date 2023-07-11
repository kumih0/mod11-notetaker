//this is where i am storing all my methods in a class constr. to make modularization easier and make sense to me
//importing 
const fs = require('fs');
const util = require('util');
const { v4: uuidv4 } = require('uuid');
// Promise version of fs.readFile/writefile to make them async
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

class Store {
  //read method
  read(){
    return readFile('db/db.json', 'utf-8');
  };

  //write method
  write(note){
    return writeFile('db/db.json', JSON.stringify(note), (err) => err ? console.log(err) : console.info(`Note written to db.json`));
  };

  //add note method that contains get notes method
  addNote(note){
    //destructuring note obj
    const { title, text } = note;
    const newNote = {
      title,
      text,
      note_id: uuidv4(),//<-calling the uuid npm boi to run when that new note obj is made
    }
    console.log(newNote);
    
    //getnotes method> grabbing dbjson obj and push new note into array, stringfy the new array (done inside write method) and put it back w write method
    const getNotes = () => {
      return JSON.parse(read());
    }
    this.write(getNotes.push(newNote));
    //method returns newnote obj so it can be passed into the res part of post method in apiroutes
    return newNote;
  };

  // deleteNote
}

module.exports = Store;
