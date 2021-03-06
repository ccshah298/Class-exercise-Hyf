// explain express comes from node_modules that comes from writing npm install express -s
// Take a look inside the folder!
const express = require("express");
const app = express();
const path = require("path");
const createTitle = require("./title_creator");

app.get("/", (request, response) => {
  response.send(`
  ${createTitle("red")}
    <body>
        <h1>My portfolio</h1>
        <h2>Charmi shah</h2>
        <h2>Student at HYF</h2>
    </body>
  `);
});

app.get("/contact", (request, response) => {
  response.send(`
  ${createTitle("blue")}
    <body>
        <h1>Contact</h1>
        <p>This is a contact my page</p>
        <p>email-ccshah298@gmail.com</p>
    </body>
  `);
});
app.get("/education", (request, response) => {
  response.send(`
  ${createTitle("green")}
    <body>
        <h1>educations</h1>
        <p>This is a education page</p>
        <ul><li>Bachelor of health science</li>
        <li>PGDCR & PGDHHM</li>
        <li>Web development</li></ul>
    </body>
  `);
});
app.get("/skills", (request, response) => {
  response.send(`
  ${createTitle("grey")}
    <body>
        <h1>skills</h1>
        <p>This is my skill page</p>
        <ul><li>HTML</li>
        <li>CSS</li>
        <li>Advance javascript</li>
        <li>node.js</li>
        <li>react.js</li>
        <li>git</li>
        <li>my sql</li>
        <li>mopngo db</li>
        <li>bootstrap</li></ul>
    </body>
  `);
});
app.get("/projects", (request, response) => {
  response.send(`
  ${createTitle('orange')} 
  <body>
  <h1>Projects</h1>
  
  <ol><li><a href = "https://github.com/rajanibusani/hyf-homework/blob/master/javascript/javascript3/week1/weather.js">Weathe app</li>

  <li>Fastest Presser Game</li>
  <li>Shopping Cart</li>
  </ol>
  </body>
  `);
  });


app.get('/test-report', function(requset, response) {
  response.sendFile(path.join(__dirname + '/test-report.html'));
});

const server = app.listen(3000, function () {
  console.log(`> Ready on http://localhost:3000`);
});

// Export app for testing purposes
module.exports = app;
