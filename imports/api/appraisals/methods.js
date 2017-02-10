import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

import Appraisals from "./appraisals"

Meteor.methods({
  insertCompetencies(data) {
    Meteor.users.upsert(Meteor.userId(),
    {$set:{
        competencies: data

      }

    });
  },
  insertQuestions(data) {
    Meteor.users.upsert(Meteor.userId(),
    {$set:{
        questions: data


      }
    
    });
  }
});
