# mod11-notetaker
Module 11 Challenge - Note Taker

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Description

- Created the connections between the finished front-end starter code through routes
- Separate files for html routes and api routes as outlined in hw readme
- Created a helper folder and a store file to hold methods for getting, adding, 

## Deployed Live Link



## Github Repo Link

https://www.github.com/kumih0/mod11-notetaker

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