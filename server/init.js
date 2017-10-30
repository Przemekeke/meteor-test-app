import { Meteor } from 'meteor/meteor';
<<<<<<< HEAD
export { getInput } 

var mySubmitFunc = function(error, state){
    
         if (state === "signIn") {
           // Successfully logged in
           // ...
         }
         if (state === "signUp") {
           console.log("SUCCES");
         }
   
     };
     
Accounts.onCreateUser(function(options, user) {
    user.profile = options.profile || {};

    user.profile.username = options.username;


    return user;
});
AccountsTemplates.configure({
    // Behavior

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000,

    // Hooks
   // onLogoutHook: myLogoutFunc,
    onSubmitHook: mySubmitFunc,
  //  preSignUpHook: myPreSubmitFunc,
  //  postSignUpHook: myPostSubmitFunc,
    forbidClientAccountCreation: false,
  
    // Texts
    texts: {
      button: {
          signUp: "Register Now!"
      },
      socialSignUp: "Register",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Password"
      },
    },
=======
export { getInput }; 

var mySubmitFunc = function(error, state){
    
	if (state === 'signIn') {
		// Successfully logged in
		// ...
	}
	if (state === 'signUp') {
		console.log('SUCCES');
	}
   
};
     
Accounts.onCreateUser(function(options, user) {
	user.profile = options.profile || {};

	user.profile.username = options.username;


	return user;
});
AccountsTemplates.configure({
	// Behavior

	// Privacy Policy and Terms of Use
	privacyUrl: 'privacy',
	termsUrl: 'terms-of-use',

	// Redirects
	homeRoutePath: '/',
	redirectTimeout: 4000,

	// Hooks
	// onLogoutHook: myLogoutFunc,
	onSubmitHook: mySubmitFunc,
	//  preSignUpHook: myPreSubmitFunc,
	//  postSignUpHook: myPostSubmitFunc,
	forbidClientAccountCreation: false,
  
	// Texts
	texts: {
		button: {
			signUp: 'Register Now!'
		},
		socialSignUp: 'Register',
		socialIcons: {
			'meteor-developer': 'fa fa-rocket'
		},
		title: {
			forgotPwd: 'Recover Your Password'
		},
	},
>>>>>>> master
});

Meteor.startup(() => {
     
});