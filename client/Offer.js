Template.Offer.onCreated(function() {
	const self = this;
	self.autorun(function() {
		self.subscribe('offers');
	});
});

Template.Offer.helpers({
	offer: () => {
		const id = FlowRouter.getParam('id');
		return Offers.findOne({
			_id: id,
		});
	},
});
