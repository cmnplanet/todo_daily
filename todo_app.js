const express = require('express'); //
const app = express();
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express'); //

  app.engine('mustache', mustacheExpress());
  app.set('views', './views') // subfolder - organization
  app.set('view engine', 'mustache');

  // app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: true}));

const list = [
  {todo: 'wash the car',
   yetTodo: true
},

{todo: 'wash the car',
 yetTodo: true
},

];

const data = {
  todos: list
};

  let sample = '<form action="x" method="post">' +
              // '<input type="submit" value="Submit">'
              // '<input type="checkbox" name="x" value="x" checked>'

app.get("/", function (req, res) {
  res.render('todo', data); // mustache file can only have 1 render
});

app.post("/", function (req, res) {
  //list.push ({todo: req.body.todo, yetTodo: true});
  todos.push(req.body.todo);
  res.redirect('/');
})

app.post("/complete", function (req, res) {
console.log(req.body);
// let completed = req.body.complete;
// function findTodo(item){ huh?
//   return item.todo === complete;
}
console.log(list.find(findTodo));
lsit.find(findTodo).yetToDo = false;

  res.redirect('/');
})

app.listen(3000, function(){
  console.log('To do da da, ta da da da')
});




const list = [

]






Jon's notes

{{^x}} // sets as false
