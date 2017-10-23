Meteor.publish('offers', function(){
	return Offers.find({ user: this.userId });
});

Meteor.publish('users', function(){
	return Meteor.users.find({ _id: this.userId });
});

Meteor.publish('images', function(){
	return Images.find({});
});
