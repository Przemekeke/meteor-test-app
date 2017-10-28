import { Mongo } from 'meteor/mongo';
import { Tracker } from 'meteor/tracker';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

	
Schema.User = new SimpleSchema({
	emails: {
		type: Array,
		optional: true
	},
	'emails.$': {
		type: Object,
		optional: true,		
	},
	'emails.$.address': {
		type: String,
		regEx: SimpleSchema.RegEx.Email
	},
	'emails.$.verified': {
		type: Boolean,
		optional: true,
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
		optional: true
	},
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

