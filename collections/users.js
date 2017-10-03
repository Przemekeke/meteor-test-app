import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Schema ={}

Schema.UserProfile = new SimpleSchema({
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
		autoform:{
			type: "date"
		}
	},
	gender: {
		type: String,
		allowedValues: ['Male', 'Female'],
		optional: true,
		autoform:{
			type: 'select-radio'
		}
	}
	});
	
	Schema.User = new SimpleSchema({
	emails: {
		type: Array,
		optional: true
	},
	"emails.$": {
		type: Object
	},
	"emails.$.address": {
		type: String,
		regEx: SimpleSchema.RegEx.Email
	},
	"emails.$.verified": {
		type: Boolean
	},
	createdAt: {
		type: Date,
		autoValue: function() {
		return new Date()
	},
	autoform: {
		type: "hidden"
	}
	},
	profile: {
		type: Schema.UserProfile,
		optional: true
	},
	// Make sure this services field is in your schema if you're using any of the accounts packages
	services: {
			type: Object,
			optional: true,
			blackbox: true,
			autoform: {
			type: "hidden"
			}
		}
	});
	
	Meteor.users.allow({
	update: function(userId, doc) {
	return !!userId;
	}
	});

Meteor.users.attachSchema(Schema.User);

Meteor.users.allow({
	  insert: function () { return true; },
	  update: function () { return true; },
	  remove: function () { return true; }
});
