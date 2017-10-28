import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Schema ={};

Schema.UserProfile = new SimpleSchema({
	username:{
		type: String,
		label: 'Username',
		unique: true
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
}, {tracker: Tracker});
	
Schema.User = new SimpleSchema({
	emails: {
		type: Array,
		optional: true
	},
	'emails.$': {
		type: Object
	},
	'emails.$.address': {
		type: String,
		regEx: SimpleSchema.RegEx.Email
	},
	'emails.$.verified': {
		type: Boolean,
		autoform: {
      			type: 'boolean-checkbox'
    		}
	},
	createdAt: {
		type: Date,
		autoValue: function() {
			return new Date();
		},
		autoform: {
			type: 'hidden'
		}
	},
	profile: {
		type: Schema.UserProfile,
		optional: true,
	},
	// Make sure this services field is in your schema if you're using any of the accounts packages
	services: {
		type: Object,
		optional: true,
		blackbox: true,
		autoform: {
			type: 'hidden'
		}
	}
}, {tracker: Tracker});
	


Meteor.users.attachSchema(Schema.User);

Meteor.users.allow({
	  insert: function () { return true; },
	  update: function () { return true; },
	  remove: function () { return true; }
});
