Meteor.subscribe('offers');

Template.FindOffers.onCreated(function() {
	Session.set('currentTitlteOrDescription', null);
});

Template.FindOffers.helpers({
	offers: () => Offers.find({}),

	findOffers() {
		if (Session.get('currentTitlteOrDescription') != null) {
			return Offers.find({
				$or: [
					{
						title: {
							$regex: `.*${Session.get('currentTitlteOrDescription')}.*`,
							$options: 'i',
						},
					},
					{
						description: {
							$regex: `.*${Session.get('currentTitlteOrDescription')}.*`,
							$options: 'i',
						},
					},
				],
			});
		}

		return null;
	},
});

Template.FindOffers.events({
	'submit .find-offers'(event) {
		event.preventDefault();
		Session.set('currentTitlteOrDescription', event.target.text.value);
	},
});
