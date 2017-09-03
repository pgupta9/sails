module.exports = {
	'creates' : function (req, res, next) {
		var f = req.param('arr');

		var i;
		for (i = 0; i < f.length; i++) {
			Exequip.create({

				exid : req.param('exid'),
				FBN : f[i].name
			}).exec(function (err) {
				if (err)
					return err;
				return res.ok();
			});
		}

		for (i = 0; i < f.length; i++) {
			User.update({
				FBN : f[i].name
			}, {
				AFI : false
			}).exec(function afterwards(err, updated) {

				if (err) {

					return err;

				}

				return res.ok();

			});
		}

	},

	'updates' : function (req, res, next) {
		var f = req.param('arr');
		var g=req.param('temp');
		var i;

		for (i = 0; i < f.length; i++) {
			function func(scopeme) {
				Exequip.find({
					where : {
						FBN : f[scopeme].name
					}
				})
				.exec(function (err, exequips) {
					if (err)
						return next(err);

					if (exequips.length == 0) {
						Exequip.create({

							exid : req.param('exid'),
							FBN : f[scopeme].name
						}).exec(function (err) {
							if (err)
								return err;
							return res.ok();
						});




					}







					return res.ok();

				});
			}


			
			func(i);

		}


		for (i = 0; i < f.length; i++) {
			User.update({
				FBN : f[i].name
			}, {
				AFI : false
			}).exec(function afterwards(err, updated) {

				if (err) {

					return err;

				}

				return res.ok();

			});
		}





		var k;
		var y;
		var t=0;
		for(k=g.length-1;k>=0;k--){

			for(y=0;y<f.length;y++){
				if(g[k].name==f[y].name){
					g.splice(k,1);
					break;

				}

			}


		}

		for(k=0;k<g.length;k++){
			User.update({
				FBN : g[k].name
			}, {
				AFI : true
			}).exec(function afterwards(err, updated) {

				if (err) {

					return err;

				}

				return res.ok();

			});

			Exequip.destroy({where:{FBN:g[k].name}}).exec(function (err){
				  if (err) {
				    return err;
				  }
				  
				  return res.ok();
				});
		}




	}
};