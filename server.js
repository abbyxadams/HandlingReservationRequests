

//these are the two Dependencies// 

const express = require ("express")
const path = require ("path")

//set up the app//

const app = express ()
const PORT = 3000


// sets up express app to handle data parsing //

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



// Reservations Data 
//================================
const tables = [

    { 
        name: "abby",
        phoneNumber: "305305305",
        email:"abby@a.com",
        uniqueId: "127eh",
    }





]




const waitList = [

    { 
        name: "luis",
        phoneNumber: "305305305",
        email:"abby@a.com",
        uniqueId: "127eh",
    }

    



]







// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });


//route for page 2 "tables and waiting list"
  app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "page2.html"));
  });
  
//route for page 3 "the form"
  app.get("/form", function(req, res) {
    res.sendFile(path.join(__dirname, "page3.html"));
  });



//returns the tables info (tables api)
  app.get("/api/tables", function(req, res) {
      return res.json(tables);
  });


//returns the waitlist info (waitlist api)
  app.get("/api/waitlist", function(req, res) {
    return res.json(waitList);
});





// listening //

app.listen (PORT, function () {

    console.log("App listening on http://localhost:" + PORT);
})



