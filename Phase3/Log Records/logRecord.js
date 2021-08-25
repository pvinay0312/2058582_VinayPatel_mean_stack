const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
debugger
const writeToFile = ({ fname, lname, gender, email }) => {
    let data = JSON.parse(fs.readFileSync("file.json").toString());
    //let data = [];
    var data1 = {};
    for (i = 0; i < writeToFile.length; i++) {

        var data1 = {
            "firstName": `${fname}`,
            "lastName": `${lname}`,
            "gender": `${gender}`,
            "email": `${email}`,
            "date": new Date()
        }

        data.push(data1);
        console.log(data);
    }
    debugger
    fs.writeFile('./file.json', JSON.stringify(data), 'utf8', (err) => {
        if (err) {
            console.log("Error occured!");
        }
    });

}

debugger
rl.question("What is your first name?: ", (fname) => {
    // do stuff
    rl.question("What is your last name?: ", (lname) => {
        // do stuff
        rl.question("What is your gender?: ", (gender) => {
            // do stuff
            rl.question("What is your email?: ", (email) => {
                rl.close();
                console.log(fname, lname, gender, email);
                writeToFile({ fname, lname, gender, email });
            })
        })
    })
})


