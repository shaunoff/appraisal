import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

import Appraisals from "./appraisals"

Meteor.methods({
  insertNewAppraisal(appraisal) {
    Appraisals.insert({
      name: "testy",
      user: this.userId,
      commRating: appraisal.commRating,
      commComment: appraisal.commComment,
      coopRating: appraisal.coopRating,
      coopComment: appraisal.coopComment
    });
  }
});
