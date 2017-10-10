Meteor.subscribe('offers');
Meteor.subscribe('users');
Meteor.subscribe('images');

Template.MyOffers.helpers({ 
    offers: ()=>{
        return Offers.find({});
    },
    updateRecipeID: function(){
        return this._id;
    },
    showPicture: function(pictureID){
        picture = Images.find({
            _id: pictureID
        });
        return picture;
    }
}); 


