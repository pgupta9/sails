/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    command_id:{
      type:'integer'
    },
    nomen_id:{
      type:'integer'
    },
  	rolling:{
  		type:'boolean'

  	},
  	AFI:{
  		type:'boolean'
  	},
  	GAS:{
  		type:'boolean'
  	},
  	GARMY:{
  		type:'boolean'
  	},
    cost:{
      type:'string',
      required:true
    },

  	NTS:{
  		type:'boolean'
  	},
  	
  	
  	
  	sublin:{
  		type:'string'
  	},
  	EIC:{
  		type:'string',
  		required:true
  	},
    NSN:{
      type:'string',
      required:true
    },
    Model:{
      type:'string',
      required:true
    },
    
    FBN:{
      type:'string',
      required:true
    },

    HRS:{
      type:'string'
    },
    MI:{
      type:'string'
    },
    CN:{
      type:'string'
    },
  	
    MFG:{
      type:'date'
    },
    SN:{
      type:'string'
    },
    VEHR:{
      type:'string'
    },
    DREC:{
      type:'date'
    },
    SDT:{
      type:'string',
      required:true
    },
    Unit:{
      type:'string',
      required:true
    },
    UIC:{
      type:'string',
      required:true
    },
    
    QTY:{
      type:'string',
      required:true
    },

  	HRFU:{
  		type:'date'
  	},
  	Remarks:{
      type:'string'
    },
    Minfo:{
      type:'string'
    },


  	DA:{
      type:'date'
    },
  	Newgen:{
      type:'string'
    },
    CC:{
      type:'boolean'
    },
    Unitbump:{
      type:'string'
    }

  	
  	
  	
  	
  	
  	}

  
};

