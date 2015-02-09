var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var memberNameValidator = [
	function (val) {
		return (val.length > 0 && val.toLocaleLowerCase() != 'none') 
	},
	'Select a valid member name.'
];
var stringValidator = [
	function (val) {
		var testVal = val.trim();
		return (testVal.length > 0)
	},
	'{PATH} can\'t be empty'
];
var standupSchema = new Schema({
	createdOn: {type: Date, default: Date.now},
	impediment: {type: String, required: true, default: 'none'},
	workToday: {type: String, required: true, validate: stringValidator},
	workYesterday: {type: String, required: true, validate: stringValidator},
	project: {type: String, required: true, validate: stringValidator},
	memberName: {type: String, required: true, validate: memberNameValidator}
});
var StandupModel = mongoose.model('Standup', standupSchema);
module.exports = StandupModel;   