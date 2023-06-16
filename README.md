# mod11-notetaker
Module 11 Challenge - Note Taker


## Pseudo-code:
```md
Import modules and packages

setup express.js server 

Define Routes 

    Get Route for the homepage 
        return the index.html

    GET Route for the notes page 
        return the notes.html 

    Get Route to retrieve all of our saved notes 
        Read the db.json file 
        return all saved notes 

    Post route to add new saved notes 
        Read the db.json file 
        Parse the request body to get the new note data 
        Assign a unique ID (uuid)
        Need to push this new note to the array of saved notes 
        Write the updated array of notes the db.json file 
        Return the new to the client

    Delete route to remove a saved note by the unique ID //*****Bonus 
        Read db.json 
        Get the id of the note to be able to remove 
        find the note with the corresponding ID in the array 
        remove the note from the array 
        Write the new updated array of saved notes with the deleted missing
        
use the helper folder for your uuid and utils 
```