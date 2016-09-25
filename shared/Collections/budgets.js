Budgets = new Mongo.Collection('budgets');

Budgets.attachSchema(new SimpleSchema({
    createdBy: {
        type: String,
        autoValue: function () {
            return this.userId
        },
        autoform: {
            omit: true
        }
    },
    Name:{
      type:String
    }
    startDate:{
      type: Date,
      autoform: {
          // value: new Date("2014-10-18T00:00:00.000Z"),
          afFieldInput: {
              type: "bootstrap-datepicker"
          }
      }
    },
    endDate:{
      type: Date,
      autoform: {
          // value: new Date("2014-10-18T00:00:00.000Z"),
          afFieldInput: {
              type: "bootstrap-datepicker"
          }
      }
    },
}));

if (Meteor.isServer){
    Budgets.allow({
        insert: function (userId, doc) {
            return true;
        },
        update: function (userId, doc, fieldNames, modifier) {
            return true;
        },
        remove: function (userId, doc) {
            return true;
        }
    });
}


if (Meteor.isClient) {
    Ground.Collection(Budgets);
}
