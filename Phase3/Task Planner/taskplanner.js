let http = require("http");
let url = require("url")
let filter = require("filter");
const fs = require('fs');
let taskDetail = [];
let Key = [];
let indexPage =
    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
<style> 
    * {
    box-sizing: border-box;
    }
  
    input[type=text], select, textarea {
    width: 40%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    margin-bottom:10px;
  }
  input[type=number], select, textarea {
    width: 40%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    margin-bottom:10px;
  }
  input[type=date], select, textarea {
    width: 40%;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
    margin-bottom:10px;
  }
  
  label {
    padding: 12px 12px 12px 0;
    display: inline-block;
  }
  input[type=submit] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    float: center;
    display: inline-block;
  }
  input[type=reset] {
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
    float: center;
    dispplay:inline-block;
  }
  button{
    background-color: #4CAF50;
    color: white;
    padding: 12px 20px;
    border: none;
  }
  input[type=submit]:hover {
    background-color: #45a049;
  }
  
  .container {
    border-radius: 5px;
    background-color: #f2f2f2;
    padding: 20px;
  }
  
  .col-5 {
    float: left;
    width: 5%;
    margin-top: 6px;
  }
  
  .col-75 {
    float: left;
    width: 75%;
    margin-top: 6px;
  }
  .inline {
    display: inline-block; 
  }
  .row:after {
    content: "";
    display: table;
    clear: both;
  }
  
  .col-25, .col-75, input[type=submit] {
      width: 100%;
      margin-top: 0;
    }
  
  
</style>
</head>

<body>
    <div class="container">
    <h1 style="text-align:center">Task Planner</h1>
    <h2>Add Task</h2>
    <form action="addtask">
        <div class="row">
            <div class="col-5">
                <label>Emp ID</label>
            </div>
            <div class="col-75">
                <input type="number" name="empid" placeholder="Enter emp id">
            </div>
        </div>
        <div class="row">
            <div class="col-5">
                <label>Task ID</label>
            </div>
            <div class="col-75">
                <input type="number" name="taskid" placeholder="Enter task id">
            </div>
        </div>
        <div class="row">
            <div class="col-5">
                <label>Task</label>
            </div>
            <div class="col-75">
                <input type="text" name="task" placeholder="Enter task">
            </div>
        </div>
        <div class="row">
            <div class="col-5">
                <label>Deadline</label>
            </div>
            <div class="col-75">
                <input type="date" name="deadline">
            </div>
        </div>
        <div class="inline">
            <input type="submit" name="Submit">
        </div>
        <div class="inline">
            <input type="reset" value="Reset">
        </div>
    </form>
    <br/>
    <h2>Delete Task</h2>
    <form action="deletetask">
        <div class="row">
            <div class="col-5">
                <label>Task ID</label>
            </div>
            <div class="col-75">
                <input type="number" name="taskid" placeholder="Enter task id">
            </div>
        </div>
        <div class="inline">
            <input type="submit" name="Delete Task"/>
        </div>
    </form>
    <br/>
    <h2>List All Task</h2>
    <form action="display">
        <button>Display Task</button>
    </form>
</div>
<hr/>
</body>

</html>
`
let server = http.createServer((request, response) => {

    let urlInfo = url.parse(request.url, true);
    const queryObject = url.parse(request.url, true).query;
    if (urlInfo.path != "/favicon.ico") {
        if (urlInfo.path == "/HomePage") {
            response.write("Welcome to About Us Page");
        } else if (urlInfo.pathname == "/addtask") {
            let taskDetail = JSON.parse(fs.readFileSync("task.json").toString());
            let taskadd = urlInfo.query;
            let result = taskDetail.find(l => l.empid == taskadd.empid && l.taskid == taskadd.taskid && l.task == taskadd.task && l.deadline == taskadd.deadline);
            response.writeHead(200, { "content-type": "text/html" });
            if (result == undefined) {
                taskDetail.push(taskadd);
                console.log(taskDetail)
                response.write("Task add successfully") //text
                response.write(indexPage);
                fs.writeFile('./task.json', JSON.stringify(taskDetail), 'utf8', (err) => {
                    if (err) {
                        console.log("Error occured!");
                    }
                });

            } else {
                response.write("Fail")
                response.write(indexPage);
            }
        } else if (urlInfo.pathname == "/deletetask") {
            console.log(queryObject);
            console.log(queryObject.taskid);
            let taskDetail = JSON.parse(fs.readFileSync("task.json").toString());
            taskDetail = taskDetail.filter((item) => {
                return item.taskid !== queryObject.taskid.toString()
            })
            response.writeHead(200, { "content-type": "text/html" });

            response.write("<table border==\"1\"><tr>");
            for (key in taskDetail[0]) {
                response.write('<td>' + key + '</td>');
            }
            response.write("</tr>");
            for (var i = 0; i < taskDetail.length; i++) {
                response.write('<tr>');
                for (key in taskDetail[i]) {
                    response.write('<td>' + taskDetail[i][key] + '</td>');
                }
                response.write('</tr>');
            }

            console.log("OUT Final", taskDetail)
            response.write("Task ID " + queryObject.taskid + " deleted");

        } else if (urlInfo.pathname == "/display") {
            let taskDetail = JSON.parse(fs.readFileSync("task.json").toString());
            let taskadd = urlInfo.query;
            let result = taskDetail.find(l => l.empid == taskadd.empid && l.taskid == taskadd.taskid && l.task == taskadd.task && l.deadline == taskadd.deadline);
            response.writeHead(200, { "content-type": "text/html" });
            taskDetail.push(result);
            response.write("<table border==\"1\"><tr>");
            for (key in taskDetail[0]) {
                response.write('<td>' + key + '</td>');
            }
            response.write("</tr>");
            for (var i = 0; i < taskDetail.length; i++) {
                response.write('<tr>');
                for (key in taskDetail[i]) {
                    response.write('<td>' + taskDetail[i][key] + '</td>');
                }
                response.write('</tr>');
            }
            response.write("Task Planner Display");
        }

        else {
            response.write(indexPage)
        }
    }
    response.end();
})



server.listen(9090, () => console.log("Serevr is running port number 9090"))


