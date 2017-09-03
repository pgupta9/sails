/**
 * SessionController
 *
 * @description :: Server-side logic for managing sessions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 

module.exports = {
	'new':function(req,res){
		
		
		res.view();
	},
	

	'create':function(req,res,next){
		if(!req.param('username') || !req.param('password')){
			var usernamePasswordRequiredError=["invalid username and/or password"];

			req.session.flash={
				err:usernamePasswordRequiredError
			}

			res.redirect('/session/new');
			
			
			return;
			

		}

	Customer.findOneByUsername(req.param('username'),function foundCustomer(err,customer){
		if(err) return next(err);

		if(!customer){
			var noAccountError=["invalid username and/or password"]
			req.session.flash={
				err:noAccountError
			}
			res.redirect('/session/new');
			
		
			return;
			
		}
	

		Customer.findOneByPassword(req.param('password'),function(err,customer){

			if(err) return next(err);

			if(!customer){
				var usernamePasswordMismatchError=["invalid username and/or password"]

			req.session.flash={
				err:usernamePasswordMismatchError
			}
			res.redirect('/session/new');


			return;
			

			}
		

			req.session.authenticated=true;
			req.session.Customer=customer;

			res.redirect('/user/expmt');
			
		});
	});

		

	
	

	},

	'destroy':function(req,res,next){

		req.session.destroy();
		res.redirect('/session/new');
	}



}

