let express = require('express');
app = express();
port = process.env.PORT || 3000;
bodyParser = require('body-parser');
var routes = require('./api/routes/Routes'); //importing route

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', routes);



app.listen(port);
console.log('todo list RESTful API server started on: ' + port);

