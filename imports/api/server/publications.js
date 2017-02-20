import { Meteor } from 'meteor/meteor';



FindFromPublication.publish('allUsers', function(skipAmount, sortValue, direction) {
  const testy = `profile.${sortValue}`
  console.log(testy)
  let adminUser =  Roles.userIsInRole( this.userId, 'admin')
  if (adminUser){
  return Meteor.users.find({},{
    fields:{
      'services.google.picture': 1,
      'services.google.given_name': 1,
      'services.google.family_name': 1,
      'competencies': 1,
      'questions': 1,
      'summary': 1,
      'stage': 1,
      'profile': 1
    },
    limit: 10,
    sort: {[testy]: direction},
    skip: skipAmount


    });
  }
});
FindFromPublication.publish('currentUser', function() {
  return Meteor.users.find({_id: this.userId},{
    fields:{
      'services.google.picture': 1,
      'services.google.given_name': 1,
      'services.google.family_name': 1,
      'competencies': 1,
      'questions': 1,
      'summary': 1,
      'stage': 1,
      'name': 1
    }


    });
});
