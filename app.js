const fs = require("fs");
const _ = require("lodash");

const note = require("./note");
const yargs = require("yargs");

var argv = yargs
.command("add", "add new note", {
    tittle : {
        describe : "tittle of note",
        demand :  true,
        alias : "t"
    },
    body : {
        describe : "body of note",
        demand :  true,
        alias : "b" 
    }
})
.help()
.argv; 
var command = process.argv[2];


if (command == "add"){
    Addnote(argv.tittle, argv.body);

}else if (command == "Update") {
    Updatenote(argv.tittle, argv.body, argv.index);
}
 else if (command == 'remove') {
     Removenote(argv.tittle)
}
else if (command == "get") {
    Getnote(argv.tittle)
}

