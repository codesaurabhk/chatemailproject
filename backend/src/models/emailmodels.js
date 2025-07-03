const   mongoose = require ("mongoose")

const emailSchema = new mongoose.Schema(
    {
        to: {type: [String]},
        cc:{type:[String], default:[]},
        bcc:{type:[String], default:[]},
        from:{type:String},
        subject:{type:String},
        body:{type:String},
       attachments:{type:[String], default:[]}, //stores file names or URLs
        date:{type:Date, default:Date.now},
        image:{type: String},
        name:{type:String},
        starred:{type:Boolean, default: false},
        bin:{type:Boolean, default:false},
        type:{type:String, enum:["inbox", "sent", "draft"], default:"sent"}
    },
    {
        timestamps: true,
        collection:"emails"
    }
);
const emailModal = mongoose.model("email", emailSchema);

module.exports = emailModal;