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
    return callService(
      'GET',
      'https://www.googleapis.com/admin/directory/v1/users'

    ).then((result) => result)
    .catch((error) => {
      return error;
    });
  },
});
