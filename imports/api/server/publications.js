import { Meteor } from 'meteor/meteor';



Meteor.publish('currentUser', function() {
  return Meteor.users.find({_id: this.userId},{
    fields:{
      'services.google.picture': 1,
      'services.google.given_name': 1,
      'services.google.family_name': 1,
      'competencies': 1,
      'questions': 1,
      'summary': 1
      }
    });
});
