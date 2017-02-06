import { Meteor } from 'meteor/meteor';



Meteor.publish('currentUser', ()=> {
  return Meteor.users.find({},{
    fields:{
      'services.google.picture': 1,
      'services.google.given_name': 1,
      'services.google.family_name': 1,
      }
    });
});
