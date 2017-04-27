


export default function message(app){
	app.get('/message/getAll',function(req,res){
    res.json({
    	msg: 'hhh'
    });
  });
}