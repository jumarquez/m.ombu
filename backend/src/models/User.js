const {Schema, model}= require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    userName: {
      type: String,
      
      unique: true,
      trim: true
    } ,
    apelyNomb: {
        type: String,
       
        trim: true
    },
    eMail:{
        type: String,
      
        trim: true }, 

    password: {
        type: String,
        trim: true,
     
    }, 
    adress:{
        street: {
            type: String,
           
            trim: true
        }, 
        city: {
            type: String,
        
            trim: true    
        } ,
        state: {
            type: String,
           
            trim: true
        }, 
        country: {
            type: String,
         
            trim: true
        }
    },
    telefono:{
        fijo:{
            type: String,
          
            trim: true
        }, 
        movil:{
            type:String,
       
            trim: true
        } 
    },
    cuil:{
        type:Number,
      
        trim: true
    }, 
    fNacimiento: Date,
    tipoUser: String,
    activo: Boolean},
    {
        timestamps: true
    }
);

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
};

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

module.exports = model('User', userSchema)
