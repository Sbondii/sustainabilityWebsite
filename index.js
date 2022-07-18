const express = require('express');
const path = require('path');

const app = express();

//serve only the static files from the dist directory 
app.use(express.static(__dirname + '/assets'));

app.get('/*', function(req, res) {

    res.sendFile(path.join(__dirname + '/index.html'));

});

//start the app by listening on the default heroku port
app.listen(process.env.PORT || 8080, function() {
    console.log('Server started on port 8080');
});
