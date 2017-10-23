Meteor.subscribe('offers');
Meteor.subscribe('users');
Meteor.subscribe('images');

Template.MyOffers.helpers({
	offers: () => Offers.find({}),
	updateRecipeID() {
		return this._id;
	},
	showPicture(pictureID) {
		picture = Images.find({
			_id: pictureID,
		});
		return picture;
	},
});

