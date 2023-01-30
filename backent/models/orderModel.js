const mongoose =require("mongoose")


const orderSchema = mongoose.Schema({
    user : {
        type:  module.Schema.Types.ObjectId,
        require :true,
        ref:"User"
        
    },
    orderItems :[
        {
            name:{type:String,require:true},
            qty:{type:Number,require:true},
            image:{type:String,require:true},
            price:{type:Number,require:true},
            product:{
                type:mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'Product'

            }


        }
    ],

    shipingAdress : {
        adress:{type:String,required:true},
        city:{type:String,required:true},
        postalCode:{type:String,required:true},
        country:{type:String,required:true},

    },

    paymentMethod : {
        type: String,
        require :true,
        
    },
    paymentResult : {
        id:{type:String},
        status:{type:String},
        update_time:{type:String},
        email_adress:{type:String},
        
    },
    taxPrice : {
        type: Number,
        require :true,
        default:0.0,
        
    },
    shipingPrice : {
        type: Number,
        require :true,
        default:0.0,
        
    },
    totalPrice : {
        type: Number,
        require :true,
        default:0.0,
        
    },
    taxprice : {
        type: Number,
        require :true,
        default:0.0,
        
    },
    isPaid : {
        type: Boolean,
        require :true,
        default:false,
        
    },

    paidAt : {
        type: Date,
        
    },
    idDelivered : {
        type: Number,
        require :true,
        default:false,

    },
    deliveredAt : {
        type: Date,
        
    },

   
},

{
    timeStamps :true,
})

const Order =mongoose.model('Order',orderSchema)

module.exports =Order

