Template.Header.onCreated(function () {  
    Template._loginButtons.toggleDropdown();  
});

Template.Header.events({ 
    'click .login-toggle': function() { 
        Session.set('nav-toggle', 'open');
        Template._loginButtons.toggleDropdown();
        
    },
    'click #dropdown-toggle': function() {
        Template._loginButtons.toggleDropdown();
        console.log("dupasda")
    } 
});
