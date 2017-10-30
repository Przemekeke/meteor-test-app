Meteor.subscribe('offers');
Meteor.subscribe('users');
Meteor.subscribe('images');

Template.MyOffers.helpers({

	offers: function() {
		if(Meteor.user()) {
			return Offers.find({
				user: Meteor.user()._id
			});
		}
		else {
			return null
		}
	},

	showPicture: function(pictureID) {
		picture = Images.find({
			_id: pictureID,
		});
		return picture;
	},
});

