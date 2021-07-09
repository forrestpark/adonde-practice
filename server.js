if (process.env.NODE_ENV !== 'production') require('dotenv').config()

const app = require('./app.js');
const port = 3000;

app.listen( process.env.PORT || port, function() {
    console.log('Express listening on port', port);
});