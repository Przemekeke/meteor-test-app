import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Schema = {};

Schema.UserProfile = new SimpleSchema({
	username: {
		type: String,
		label: 'Username',
        unique: true,
	},	
	firstName: {
		type: String,
		optional: true
	},
	lastName: {
		type: String,
		optional: true
	},
	birthday: {
		type: Date,
		optional: true,		
		autoform: {
			type: 'bootstrap-datepicker',
			datePickerOptions: {
				autoclose: true
			}
		}
	},
	gender: {
		type: String,
		optional: true,
		autoform: {
			type:'select-radio',
			options: function () {
				return [
				   { label: 'Male', value: 'Male'},
				   { label: 'Female', value: 'Female'},				   
				   ];
			},
		}
	}
});