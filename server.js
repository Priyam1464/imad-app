var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles={
 article1:{
    title:"article1",
    date:"24th February 2018",
     content: `<p>
     There's a fire in your eyes
     </p>
      <p>
      A lifetime of memories
      </p>`,
    author:"Priyam's lifeline"
},
article2:{
   title:"article2",
    date:"25th February 2018",
     content: `  <p>
     Thousand Miles
     </p>
      <p>
      You ever think of me
      </p>`,
    author:"Priyam's lifeline"  
},
article3:{
     title:"article3",
    date:"26th February 2018",
     content: `
     <p>She will be loved</p>
      <p>I don't mind coming everyday</p>
      <p>Priyam's lifeline</p> `,
    author:"Priyam's lifeline"  
}
};
function createTemplate(data)
{
    var title=data.title;
    var date=data.date;
    var item=data.content;
    var htmlTemplate=`
    <html>
<head>
    <title>${title}</title>
    <link rel="stylesheet" href="ui/style.css">
</head>    
    <body>
   <h1 href="/"><a href="/">Home</a></h1>
   <hr/>
   <div class="content">
      <h3>${date}</h3>
      ${item}
      <p>
      ${data.author}
      </p>
   </div>
    </body>
</html> `;
    return htmlTemplate;  
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName',function(req,res)
{       var articleName=req.params.articleName;
      res.send(createTemplate(articleName));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
