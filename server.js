const app = require('./app.js');
const port = 3000;

console.log("process.env.PORT: ", process.env.PORT)

app.listen( process.env.PORT || port, function() {
    console.log('Express listening on port', port);
});