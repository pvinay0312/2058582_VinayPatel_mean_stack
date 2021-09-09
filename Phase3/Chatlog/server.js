let express = require("express");
let app = express();
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let cors = require("cors");
let http = require("http").Server(app);
const { request, response } = require("express");
mongoose.pluralize(null);


let io = require('socket.io')(http);
// add middleware
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));
mongoose.Promise = global.Promise;
let url = ("mongodb://localhost:27017/chat");

var nameSchema = new mongoose.Schema({
    name: String,
    text: String
})

var message = mongoose.model("message", nameSchema);
mongoose.connect(url).
    then(res => {
        console.log("connected with database")
    }).
    catch(error => console.log(error));

app.get("/", (request, response) => {
    response.sendFile(__dirname + "//index.html");
})
io.on("connection", (socket) => {
    console.log("Socket is connected...")
    socket.on("obj", (msg) => {
        console.log(msg);
    })
    // sending data to client 
    socket.emit("obj1", "Hello Client, you are connected with Socket Io server...");
})
app.post("/addmessage", async (request, response) => {
    try {
        var data = new message(request.body);
        await data.save()
        response.send("<html style=background-color:lightblue;text-align:center;font-size:30px>Message saved in database" + data + "</html")
        io.emit('chat', request.body)
        console.log(data);
    } catch {
        response.sendStatus(500)
        console.log(error)
    }

})
app.get('/chat', (request, response) => {
    message.find({}, (err, chats) => {
        if (!err) {
            let display = "<html style=background-color:#66ccff><div style=margin-top:20px><table border=1 style=color:blue;text-align:center>";
            display += "<tr><th>Name</th><th>Message</th></tr>"
            const resulthtml = chats.map(result => {
                display += "<tr>"
                display += "<td>" + result.name + "</td>"
                display += "<td>" + result.text + "</td>"
                display += "</tr>"
            })
            display = display + "</table></div></html>"
            response.send(display)
        } else {
            response.send(err);
        }
    })
})

http.listen(9090, () => console.log("Server running on port number 9090"))