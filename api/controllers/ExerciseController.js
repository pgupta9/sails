module.exports = {
	'make' : function (req, res, next) {
		Exercise.find(function foundExercises(err, exercises) {

			res.view({
				exercises : exercises
			});
		});

	},

	'submitted' : function (req, res, next) {
		res.view();
	},

	'sortEx' : function (req, res, next) {
		Exercise.find(function foundExercises(err, exercises) {

			res.view({
				exercises : exercises
			});
		});
	},
	'calendar' : function (req, res, next) {
		Exercise.find(function foundExercises(err, exercises) {

			res.view({
				exercises : exercises
			});
		});
	},

	'show' : function (req, res, next) {
		var i;
		var j;
		var k;
		Exercise.findOne(req.param('id'), function foundExercise(err, exercise) {
			if (err)
				return next(err);
			if (!exercise)
				return next();
			i = exercise;
		});

		Exequip.find({
			where : {
				exid : req.param('id')
			}

		}).exec(function (err, exequips) {
			if (err)
				return next(err);
			j = exequips;

			res.view({
						exercise : i,
						exequips : j,

						
					});
			
		});
	},

	'edit' : function (req, res, next) {
		var i;
		var j;
		var k;
		Exercise.findOne(req.param('id'), function foundExercise(err, exercise) {
			if (err)
				return next(err);
			if (!exercise)
				return next();
			i = exercise;
		});

		Exequip.find({
			where : {
				exid : req.param('id')
			}

		}).exec(function (err, exequips) {
			if (err)
				return next(err);
			j = exequips;

			res.view({
						exercise : i,
						exequips : j,

						
					});
			
		});
	},




	
};