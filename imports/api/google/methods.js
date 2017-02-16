import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';


const callService = (type, url, options) => new Promise((resolve, reject) => {
  HTTP.call(type, url, options, (error, result) => {
    if (error) {
      reject(error);
    } else {
      resolve(result);
    }
  });
});


Meteor.methods({

  directory() {
    const accessToken = Meteor.user().services.google.accessToken
    var options = {
        'headers' : {
          'Authorization': 'Bearer ' + accessToken,
        },
        'params' : {
           key:  "246654461820-lgm311b6ns045k5se7cgqvf5vjf9mkej.apps.googleusercontent.com",
           domain : 'p3i-inc.com',
           query: 'orgUnitPath:/Employees',
           maxResults: 500

        }
      }

    return callService(
      'GET',
      'https://www.googleapis.com/admin/directory/v1/users',
      options

    )
    .then(console.log())
    .then((result) => {
      const users = result.data.users

      users.map((user,index)=>{
        exists = Meteor.users.findOne( {emails: [{address: user.primaryEmail}]} );
        if ( !exists ) {
        Meteor.users.insert({emails: [{address: user.primaryEmail}]})
        console.log(`${user.name.fullName} was added!`)
        }
        if ( exists ) {
        console.log("user exists")
        }

        //Meteor.users.insert({emails: [{address: user.primaryEmail}]})
      })
      return result
    })
        .catch((error) => {
      return error;
    });
  },
});
