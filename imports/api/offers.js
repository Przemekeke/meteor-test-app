export const Offers = new Mongo.Collection('offers');

 

if (Meteor.isServer) {

	// This code only runs on the server

	Meteor.publish('offers', function tasksPublication() {

		return Offers.find();

	});

}