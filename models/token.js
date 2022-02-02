const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//token sechma, token is stored for verfication 
//after verfication the token will be deleted from token collection in db.
const tokenSchema = new Schema({
	userId: {
		type: Schema.Types.ObjectId,
		required: true,
		ref: "user",
		unique: true,
	},
	token: { type: String, required: true },
	createdAt: { type: Date, default: Date.now, expires: 3600 },
});

module.exports = mongoose.model("token", tokenSchema);
