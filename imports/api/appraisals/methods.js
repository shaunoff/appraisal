import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';

import Appraisals from "./appraisals"

Meteor.methods({
  insertCompetencies(data) {
    Meteor.users.upsert(Meteor.userId(),
    {$set:{
        'competencies.employee': data

      }

    });
  },
  insertManCompetencies(data) {
    Meteor.users.upsert(Meteor.userId(),
    {$set:{
        'competencies.manager': data

      }

    });
  },
  insertQuestions(data) {
    Meteor.users.upsert(Meteor.userId(),
    {$set:{
        'questions.employee': data


      }

    });
  },
  insertManQuestions(data) {
    Meteor.users.upsert(Meteor.userId(),
    {$set:{
        'questions.manager': data


      }

    });
  },
  insertSummary(data) {
    console.log(data)
    Meteor.users.upsert(Meteor.userId(),
    {$set:{
        'summary.employee': data


      }

    });
  },
  insertManSummary(data) {
    console.log(data)
    Meteor.users.upsert(Meteor.userId(),
    {$set:{
        'summary.manager': data


      }

    });
  }
});
