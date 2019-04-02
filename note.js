const fs = require("fs");

var FetchingNote = ()=>{
    try{
        noteString = fs.readFileSync("NewNotes.json");
        return JSON.parse(noteString);
    } 
    catch(e){
        return []
    };
}

var SavingNote = (notes)=>{
    fs.writeFileSync("NewNotes.json", JSON.stringify(notes))
}


Addnote = (tittle, body) => {
   var  notes = FetchingNote();
    var note = {
        tittle,
        body
    };
   var duplicateNote = notes.filter((note)=> note.tittle ==tittle);

    if (duplicateNote.length === 0){
    notes.push(note);
   SavingNote(notes);
   } 
   else{
    console.log("title already in existance, please enter another tittle name!!!");  
   }
};
/* -----------UPDATING NOTE USING A COMMAND------------*/

Updatenote = (tittle, body, index) => {
    var notes = FetchingNote()                                                                      // -------fetching previous note
    note = {
       tittle,
       body 
    }
    
    if (notes.length === 0) {                                                                        //--------if no note add note
        notes.push(note);
        SavingNote(notes)
        
    }
    else{                                                                                            // ------check if previous tittle name is same as new tittle

        var duplicateNote = notes.filter((note)=> note.tittle ==tittle);

        if (duplicateNote.length === 0){                                                              // -------if it doesnot have same name add but first do this validation 

            index < notes.length ? notes[index] = note :notes.push(note)                             // <====== turnary operation same as ========> // if (index < notes.length){                                      
            SavingNote(notes);                                                                                              //      notes[index] = note
        }                                                                                                                   //   }
        else{                                                                                                               //   else{ 
        console.log("title already in existance, please enter another tittle name!!!");                                     //     notes.push(note)
        }                                                                                                                    //  };                                         
    }
} 

// Removenote = (tittle) => {
//     var note = {
//         tittle,
//     };
//     var notes = FetchingNote();
//    var notetoRemove = notes.filter((note)=> note.tittle === tittle);
     
//      for (var i = 0; i < notes.length; i++){

//        var comparetittle = notes[i].tittle;

//         if (comparetittle === notetoRemove[0].tittle){
//          notes.splice(i, 1);
//         } 
//      }
//     SavingNote(notes);
// };
    
/*-----------------------------REmoving using array.filter Method.................................*/
Removenote = (tittle) => {
    note = {
        tittle,
    }
    var notes = FetchingNote();

   var notenotRemoved = notes.filter((note)=> note.tittle !==tittle);
   SavingNote(notenotRemoved);
}


 Getnote = (tittle) => {
    var note = {
        tittle,
    };
    var notes = FetchingNote();
   var notetoget = notes.filter((note)=> note.tittle ===tittle);

    fs.appendFileSync("notegotten.json", JSON.stringify(notetoget));

 
    
}


module.exports = {
    Addnote,
    Updatenote,
    Getnote,
    Removenote,
      
}
 
