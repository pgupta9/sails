/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	
	'submitted':function(req,res){
		res.view();
	},
	'expmt':function(req,res){
		res.view();
	},
	
	'add':function(req,res){
		res.view();
	},
	'add2':function(req,res){
		res.view();
	},
	
	'submitted':function(req,res){
		res.view();
	},
	'expmt':function(req,res){
		res.view();
	},
	
	'shows':function(req,res,next){
		User.find(function foundUsers(err,users){
			
			res.view({
				users:users
			});
		});
	},

	'map':function(req,res,next){
		User.find(function foundUsers(err,users){
			
			res.view({
				users:users
			});
		});
	},
	'show':function(req,res,next){
		User.findOne(req.param('id'), function foundUser(err,user){
			if(err) return next(err);
			if(!user) return next();
			res.view({
				user:user
			});
		});
	},
	'edit':function(req,res,next){
		User.findOne(req.param('id'), function foundUser(err,user){
			if(err) return next(err);
			if(!user) return next();
			res.view({
				user:user
			});
		});
	},
	'edit2':function(req,res,next){
		User.findOne(req.param('id'), function foundUser(err,user){
			if(err) return next(err);
			if(!user) return next();
			res.view({
				user:user
			});
		});
	},

	'update':function(req,res,next){
		
		User.update(req.param('id'),req.params.all(),function userUpdated(err){

			if(err) {
				
				return res.redirect('/user/edit'+req.param('id'));
			}

			res.redirect('/user/show/' + req.param('id'));
		});
	},
	'sortSDT':function(req,res,next){
		var hding;
		var showedit=false;
		var showshow=false;
		switch (req.param('mode')) {
	case 'edit':
		hding="Edit equipment";
		showedit=true;
		showshow=false;
		break;
	case 'search':
		 hding="Search equipment";
		 showedit=true;
		 showshow=true;
		break;
	case 'view':
	default:
		hding="View equipment";
		showedit=false;
		showshow=true;
		break;
}

		User.find(function foundUsers(err,users){
			
			res.view({
				users:users,
				hding:hding,
				showedit:showedit,
				showshow:showshow
			});
		});
	},

	'fetchd':function(req,res,next){
		
		
		User.find({
  where: { nomen_id:req.param('nomenu_id'),AFI:true },
  
}).exec(function(err, users){
     if (err) return next(err);
     res.send({
     	users:users
     });


});

	}


	
	};

