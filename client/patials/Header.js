Template.Header.onCreated(function () {
	Template._loginButtons.toggleDropdown();
});

Template.Header.events({
	'click .login-toggle'() {
		Session.set('nav-toggle', 'open');
		Template._loginButtons.toggleDropdown();
	},
	'click #dropdown-toggle'() {
		Template._loginButtons.toggleDropdown();
		console.log('dupasda');
	},
});
