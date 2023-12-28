const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname, 'operation');
const filepath = `${dirpath}/newfile.txt`;
//creat a new file
fs.writeFileSync(filepath,"this is a new file");
fs.readFile(filepath,'utf-8',(err,contents)=>{
    console.log(contents);

});

fs.appendFile(filepath,"the name of the file and",(err,contents)=>{
    if(!err){
        console.log("file updated successfully");
    }
});


