/*
 * GET Index.
 */ 
 
exports.index = function(req, res){
  res.render('index', { 
		title: 'Node Boilerplate'
	});
};