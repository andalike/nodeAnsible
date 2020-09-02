var express = require("express");


var app = express();
app.set('port', process.env.PORT || 7878);
var cmd=require('node-cmd');

var bodyParser = require('body-parser')
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({ // to support URL-encoded bodies
    extended: true
}));

//This will be used to run the Script , required to deploy the website
app.post('/createInstance', function (req, res) {
    var commandToRun = "ansible-playbook -v ";
    var fileName = "ec2_prov_playbook.yml";
    var finalCommand = commandToRun + fileName;
    console.log("finalCommand->"+finalCommand);
    cmd.run(finalCommand);
    res.sendStatus(200);
});

//This is a dummy placeholder, This is to test if the script is working/or not.
app.get('/createInstance', function (req, res) {
    res.sendStatus(200);
});

app.listen(app.get('port'));
