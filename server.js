

//these are the two dependencies// 

const express = require ("express")
const path = require ("path")

//set up the app//

const app = express ()
const PORT = 3000


// listening //

app.listen (PORT, function () {

    console.log("app listening on PORT" + PORT);
});

