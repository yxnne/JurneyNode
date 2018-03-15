var express = require('express');

var app = express();

// 添加 handlebars 视图引擎
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

// 添加静态文件资源处理中间件
app.use(express.static(__dirname + '/public' ));

// 设置端口
app.set('port', process.env.PORT || 3000);

app.get('/',function(req, res){
	// res.type('text/plain');
	// res.send('OK,This is Root');
	res.render('home');
});

app.get('/about',function(req, res){

	// 测试handlebars渲染动态值
	const names = ['yxnne', 'ax', 'jerkins', 'yellowman', 'yaplob'];
	var name = names[Math.floor( Math.random() * names.length)];
	res.render('about', {randomName:name});
});

// 定制404页面
app.use(function(req, res){
	//res.type('text/plain');
	res.status(404);
	res.render('404');
});

// 定制500页面
app.use(function(err, req, res, next){
	console.error(err.stack);
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'), function(){
	console.log('jurneyNode Server has been started on Port:' + app.get('port'));	
});