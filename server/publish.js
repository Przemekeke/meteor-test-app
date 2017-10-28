Meteor.publish('offers', function(){
	return Offers.find({});
});

Meteor.publish('users', function(){
	return Meteor.users.find({});
});

Meteor.publish('images', function(){
	return Images.find({});
});
