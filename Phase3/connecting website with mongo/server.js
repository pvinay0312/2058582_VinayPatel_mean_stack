let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
//let url = require("url")


//const MongoClient = require('mongodb').MongoClient;

const { request, response, json } = require("express");
mongoose.pluralize(null);

let app = express();

// add middleware
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));
mongoose.Promise = global.Promise;
let url = ("mongodb://localhost:27017/Course");

var nameSchema = new mongoose.Schema({
    courseid: Number,
    coursename: String,
    description: String,
    amount: Number
})

var User = mongoose.model("User", nameSchema);
mongoose.connect(url).
    then(res => {
        console.log("connected with database")
    }).
    catch(error => console.log(error));




app.get("/", (request, response) => {
    response.sendFile(__dirname + "//index.html");
})
app.get("/addcourse.html", (request, response) => {
    response.sendFile(__dirname + "//addcourse.html");
})
app.post('/add', (request, response) => {
    //console.log(request.body)
    var myData = new User(request.body);
    myData.save()
        .then(item => {
            response.send("<html style=background-color:lightblue;text-align:center;font-size:30px>item saved to database" + myData + "</html");
        })
        .catch(err => {
            response.status(400).send("unable to save to database");
        });
    console.log(myData);
})
app.get("/updatecourse.html", (request, response) => {
    response.sendFile(__dirname + "//updatecourse.html");
})
app.post('/:amount', (request, response) => {
    const user = request.body;
    User.updateOne({ courseid: user.courseid }, { $set: { amount: user.amount } }, (err, result) => {
        if (!err) {
            response.send("<html style=background-color:lightblue;text-align:center;font-size:30px>Course ID: " + user.courseid + " Amount: " + user.amount + " has been successfully updated</html");
            console.log(result);
        } else {
            response.send("Fail to update Amount");
        }

    })
})



app.get("/deletecourse.html", (request, response) => {
    response.sendFile(__dirname + "//deletecourse.html");
})
app.post('/delete/:cid', (request, response) => {
    let cid = request.body;
    User.deleteOne({ courseid: cid.courseid }, (err, result) => {
        if (!err) {
            response.send("<html style=background-color:lightblue;text-align:center;font-size:30px>Course with Id " + cid.courseid + " has been deleted successfully</html>")
        } else {
            response.send(err)
        }
        console.log(cid);
    })

})

app.get("/fetchcourse.html", (request, response) => {
    response.sendFile(__dirname + "//fetchcourse.html");
})

app.get('/fetch', (request, response) => {
    User.find({}, (err, result) => {
        if (!err) {
            console.log(result);
            response.send(JSON.stringify(result), null, 2);

        } else {
            response.send(err);
        }
    })
})

app.get('/display', (request, response) => {
    User.find({}, (err, result) => {
        if (!err) {
            console.log(result)
            let DispalyHtml = "<html style=background-color:lightblue><div style=margin-top:20px><table border=1 style=color:blue;text-align:center>"
            DispalyHtml += "<tr><th>Course Id</th><th>Course Name</th><th>Description</th><th>Amount</th></tr >"
            const resultHtml = result.map(item => {
                DispalyHtml += "<tr>"

                DispalyHtml += "<td>" + item.courseid + "</td>"
                DispalyHtml += "<td>" + item.coursename + "</td>"
                DispalyHtml += "<td>" + item.description + "</td>"
                DispalyHtml += "<td>" + item.amount + "</td>"
                DispalyHtml += "</tr>"

            })
            DispalyHtml = DispalyHtml + "</table></div></html>"

            console.log('after display');
            response.send(DispalyHtml);

        } else {
            response.send(err);
        }
    })
})






app.listen(9090, () => console.log("Server running on port number 9090"))