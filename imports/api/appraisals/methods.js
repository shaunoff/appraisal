import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

import Appraisals from "./appraisals"

Meteor.methods({
  insertCompetencies(data) {
    Meteor.users.upsert(Meteor.userId(),
    {$set:{
        'competencies.employee': data,
         stage: 2

      }

    });
  },
  insertManCompetencies(data) {
    Meteor.users.upsert(Meteor.userId(),
    {$set:{
        'competencies.manager': data,
         stage: 5


      }

    });
  },
  insertQuestions(data) {
    Meteor.users.upsert(Meteor.userId(),
    {$set:{
        'questions.employee': data,
        stage: 3

      }

    });
  },
  insertManQuestions(data) {
    Meteor.users.upsert(Meteor.userId(),
    {$set:{
        'questions.manager': data,
         stage: 6


      }

    });
  },
  insertSummary(data) {
    console.log(data)
    Meteor.users.upsert(Meteor.userId(),
    {$set:{
        'summary.employee': data,
        stage: 4

      }

    });
  },
  insertManSummary(data) {
    console.log(data)
    Meteor.users.upsert(Meteor.userId(),
    {$set:{
        'summary.manager': data,
         stage: 7


      }

    });
  }
});
