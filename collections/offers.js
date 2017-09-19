import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

Offers = new Meteor.Collection('offers');

Offers.allow({ 
  insert: function(userId, doc) { 
    return !!userId; 
  }, 
  update: function() { 
    return true; 
  }, 
  remove: function() { 
    return true; 
  } 
});


Offers.schema = new SimpleSchema({

  title: {
    label: "Title",
    type: String},
  pictutreFile: 
  { label: "Picture File",
    type: String},
  description: 
  { label:"Description",
    type: String}
})

Offers.attachSchema(Offers.schema);
