var express = require('express')
var app = express()
var bodyParser = require('body-parser')

app.listen(3000, function(){
    console.log("start!! express on port 3000")
})

//  bodyParser설정
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

// view engine
app.set('view engine', 'ejs')

// static 소스
app.use(express.static('public'))

// url
app.get('/', function(req,res){
    res.sendFile(__dirname + "/public/main.html")
})

app.post('/ajax_search', function(req,res){
    console.log(req.body.keyword)

    var responseData = {'result': 'ok',  'items': [req.body.keyword+'0',req.body.keyword+'1',req.body.keyword+'2']}
    res.json(responseData);
})
